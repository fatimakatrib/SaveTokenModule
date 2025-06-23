package expo.modules.savingsharedtoken

import expo.modules.core.interfaces.Package
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleRegistry

class SavingSharedTokenPackage : Package {
  override fun createModules(moduleRegistry: ModuleRegistry): List<Module> {
    return listOf(Saving_shared_tokenModule())
  }
}
