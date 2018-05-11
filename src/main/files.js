/* eslint-disable */
const { dialog } = require('electron');

const fs = require('fs');
const path = require('path');

const cbz = require('extract-zip');
const unrar = require('node-unrar-js');

const {
  readDirectory,
  createTmpFolder,
  setCurrentDirectory,
  getCurrentDirectory,
  areThereFolder,
  copyUp,
} = require('./directory');

let currentFile;
let mainWindow;

function selectOpenFile() {
  dialog.showOpenDialog(
    {
      properties: ['openFile'],
      filters: [
        {
          name: 'Comic Files',
          extensions: ['cbr', 'cbz', 'pdf'],
        },
      ],
    },
    files => {
      if (!files) {
        return;
      }
      mainWindow.webContents.send('fetching', true);
      const pathFile = files[0];
      openFile(pathFile);
    },
  );
}

function openFile(pathFile) {
  setCurrentFile(pathFile, true);
  setCurrentDirectory(pathFile);
  extractFiles(pathFile)
    .then(req => {
      const { tmpFolder } = req;
      // eslint-disable-next-line no-shadow
      readDirectory(tmpFolder, (err, files) => {
        const ext = ['.jpg', '.png'];
        const folders = areThereFolder(files, tmpFolder);
        if (folders) {
          // eslint-disable-next-line
          files = copyUp(folders, tmpFolder);
        }
        removeFilesByExtensions(files, tmpFolder, ext);
        // eslint-disable-next-line no-shadow
        readDirectory(tmpFolder, (err, files) => {
          if (err) throw new Error(err);
          if (process.env.NODE_ENV === 'development') {
            req.tmpFolder = path.relative(path.resolve(__dirname), tmpFolder);
          }
          const filename = path.basename(tmpFolder).replace(/_/gi, ' ');
          mainWindow.webContents.send('fetching', false);
          mainWindow.webContents.send(
            'file-extracted',
            Object.assign({}, req, { filename, files }),
          );
        });
      });
    })
    .catch(err => {
      throw Error(err);
    });
}

function changeFile(nextOrPrevious) {
  readDirectory(getCurrentDirectory(), (err, files) => {
    if (err) throw Error(err);
    const filesFilter = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ext === '.cbz' || ext === '.cbr';
    });
    const index = filesFilter.findIndex(file => file === currentFile);
    const newIndex = nextOrPrevious === 'next' ? index + 1 : index - 1;
    const hasNext = newIndex < filesFilter.length && newIndex > -1;
    if (hasNext)
      openFile(path.join(getCurrentDirectory(), filesFilter[newIndex]));
    else mainWindow.webContents.send('fetching', false);
  });
}

function setCurrentFile(file, isDirectory) {
  if (isDirectory) {
    currentFile = path.parse(file).base;
  } else {
    currentFile = file;
  }
}

function removeFilesByExtensions(files, tmp, ext) {
  // eslint-disable-next-line no-param-reassign
  if (typeof ext === 'string') ext = [ext];

  files.forEach(file => {
    const fileExt = path.extname(file).toLowerCase();
    const isFile = fs.lstatSync(path.join(tmp, file)).isFile();
    const checked = ext.find(e => e.toLowerCase() === fileExt);

    if (!checked && isFile) {
      fs.unlinkSync(path.join(tmp, file));
    }
  });
}

function extractFiles(pathFile) {
  const file = path.basename(pathFile);
  const tmpFolder = createTmpFolder(file);
  switch (path.extname(file)) {
    case '.cbz':
      return cbzExtract(pathFile, tmpFolder);
    case '.cbr':
      return cbrExtract(pathFile, tmpFolder);
    default:
      break;
  }
}

function cbzExtract(pathFile, tmpFolder) {
  return new Promise((resolve, reject) => {
    cbz(pathFile, { dir: tmpFolder }, err => {
      if (err) reject(err);

      resolve({ tmpFolder });
    });
  });
}

function cbrExtract(pathFile, tmpFolder) {
  return new Promise(resolve => {
    const extractor = unrar.createExtractorFromFile(pathFile, tmpFolder);
    const extracted = extractor.extractAll();
    if (extracted[0].state === 'SUCCESS') resolve({ tmpFolder });
  });
}

function setFileMainWindows(main) {
  mainWindow = main;
}

const API = {
  selectOpenFile,
  removeFilesByExtensions,
  changeFile,
  setFileMainWindows,
};

module.exports = API;
