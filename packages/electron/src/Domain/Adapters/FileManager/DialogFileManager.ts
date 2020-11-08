import { dialog, Dialog } from 'electron'
import { FileManagerAdapter, Path } from '@vcr/domain'
import { OpenFileFactory } from '../../File/Factories/OpenFileFactory'

export class DialogFileManager implements FileManagerAdapter {
  static factory(openFileFactory: OpenFileFactory) {
    return new DialogFileManager(dialog, openFileFactory)
  }

  constructor(
    private dialog: Dialog,
    private openFileFactory: OpenFileFactory
  ) {}

  selectDirectory() {
    return this.dialog.showOpenDialog({
      properties: ['openDirectory'],
    })
  }

  async selectFile(types: string[]) {
    const res = await this.dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        {
          name: types.join(', '),
          extensions: types,
        },
      ],
    })
    return res.filePaths[0]
  }

  async openFile(path: Path) {
    const exec = this.openFileFactory.get(path)
    return exec.run()
  }
}
