const { app } = require('electron');

const fs = require('fs');
const path = require('path');

const { getCleanedString, removeExtension } = require('./filters/cleanString');

let currentDirectory;

function readDirectory(dir, cb) {
  fs.readdir(dir, cb);
}

function setCurrentDirectory(directory) {
  currentDirectory = path.parse(directory).dir;
}

function getCurrentDirectory() {
  return currentDirectory;
}

function removeTmpFolder() {
  const tmpPath = path.join(app.getPath('temp'), 'VisualComicReader');
  deleteFolderRecursive(tmpPath);
}

function deleteFolderRecursive(pathFolder) {
  if (fs.existsSync(pathFolder)) {
    fs.readdirSync(pathFolder).forEach((file) => {
      const curPath = `${pathFolder}/${file}`;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(pathFolder);
  }
}

function createTmpFolder(file) {
  const tmpPath = process.env.NODE_ENV === 'development' ?
    path.join(path.resolve(__dirname), '..', '..') :
    app.getPath('temp');
  const tmpFolder = process.env.NODE_ENV === 'development' ?
    'static' : 'VisualComicReader';

  const folder = file ?
    path.join(tmpPath, tmpFolder, getCleanedString(removeExtension(file))) :
    path.join(tmpPath, tmpFolder);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  } else {
    deleteFolderRecursive(folder);
    createTmpFolder(file);
  }

  return folder;
}

function areThereFolder(files, dir) {
  const folders = files.filter(file => fs.lstatSync(path.join(dir, file)).isDirectory());
  return folders.length ? folders : false;
}

function copyUp(folders, dir) {
  // eslint-disable-next-line
  if (typeof folders === 'string') folders = [folders];
  folders.forEach((folder) => {
    const files = fs.readdirSync(path.join(dir, folder));

    files.forEach((file) => {
      const dirFile = path.join(dir, folder, file);
      if (fs.lstatSync(dirFile).isFile()) {
        const readFile = fs.readFileSync(dirFile);
        fs.writeFileSync(path.join(dir, `${folder}_${file}`), readFile);
      }
    });
    deleteFolderRecursive(path.join(dir, folder));
  });
  return fs.readdirSync(dir);
}

const API = {
  readDirectory,
  removeTmpFolder,
  createTmpFolder,
  setCurrentDirectory,
  getCurrentDirectory,
  areThereFolder,
  copyUp,
};

module.exports = API;
