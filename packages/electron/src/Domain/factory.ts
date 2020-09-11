import { ipcMain } from 'electron'
import { createContainer } from 'depsin'
import { Domain, electronProcessMain } from '@vcr/domain'

import { ElectronComicRepository } from './Comic/Repositories/ElectronComicRepository'
import { SelectFileListener } from './Comic/Listeners/SelectFileListener'
import { ShowInfoShortcutListener } from './Shortcuts/Listeners/ShowInfoShortcutListener'
import { ElectronShortcutsRepository } from './Shortcuts/Repositories/ElectronShortcutsRepository'
import { ElectronDialog } from './Adapters/Dialog/ElectronDialog'
import { ShowInfoShortcutUseCase } from './Shortcuts/UseCase/ShowInfoShortcutUseCase'
import { ShowInfoShortcutService } from './Shortcuts/Services/ShowInfoShortcustService'
import { Symbols } from './symbols'

export function factory() {
  // Config
  const config = {
    platform: process.platform,
  }

  const adapters = {
    processMain: electronProcessMain(ipcMain),
    dialog: new ElectronDialog(),
  }

  const container = createContainer(
    {
      [Symbols.Config]: { asValue: config },
      [Symbols.ProcessMain]: { asValue: adapters.processMain },
      [Symbols.Dialog]: { asValue: adapters.dialog },
      [Symbols.ComicRepository]: { asClass: ElectronComicRepository },
      [Symbols.ShortcutsRepository]: { asClass: ElectronShortcutsRepository },
      [Symbols.ShowInfoShortcutsService]: { asClass: ShowInfoShortcutService },
      [Symbols.SelectFileListener]: { asClass: SelectFileListener },
      [Symbols.ShowInfoShortcutsListener]: {
        asClass: ShowInfoShortcutListener,
      },
      [Symbols.ShowInfoShortcutsUseCase]: { asClass: ShowInfoShortcutUseCase },
    },
    { lifetime: 'singleton' }
  )

  // Listeners
  const listeners = {
    selectFile: container.get<SelectFileListener>(Symbols.SelectFileListener),
    showInfoShortcuts: container.get<ShowInfoShortcutListener>(
      Symbols.ShowInfoShortcutsListener
    ),
  }

  // UseCases
  const useCases = {
    showInfoShortcuts: container.get<ShowInfoShortcutUseCase>(
      Symbols.ShowInfoShortcutsUseCase
    ),
  }

  return new Domain({ useCases, listeners, config })
}