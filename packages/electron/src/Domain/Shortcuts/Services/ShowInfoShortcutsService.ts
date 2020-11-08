import { Service } from '@vcr/domain'
import { ShortcutsRepository } from '../Repositories/ShortcutsRepository'
import { inject } from 'depsin'

import { Symbols } from '../../symbols'
import { IConfig } from '../../Config/models/Config'

export class ShowInfoShortcutsService implements Service {
  constructor(
    @inject(Symbols.ShortcutsRepository)
    private repository: ShortcutsRepository,
    @inject(Symbols.Config) private config: IConfig
  ) {}

  execute() {
    const ctrlOrCmd = this.config.platform === 'darwin' ? 'Cmd' : 'Ctrl'

    return this.repository.showInfo({
      type: 'none',
      title: 'Shortcuts',
      message: `
        ${ctrlOrCmd} + F: Enable/disable fullscreen \n
        ${ctrlOrCmd} + O: OpenFile \n
        ${ctrlOrCmd} + S: Show shortcuts \n
        ${ctrlOrCmd} + Down: Zoom Out \n
        ${ctrlOrCmd} + Up: Zoom In \n
        Left: Previous page \n
        Right: Next page \n
      `,
    })
  }
}
