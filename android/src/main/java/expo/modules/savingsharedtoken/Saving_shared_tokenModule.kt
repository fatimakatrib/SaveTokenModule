package expo.modules.savingsharedtoken

import android.accounts.Account
import android.accounts.AccountManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class Saving_shared_tokenModule : Module() {

  private val accountType = "com.example.myapp" // Customize this
  private val accountName = "Orbit Now"

  override fun definition() = ModuleDefinition {
    Name("Saving_shared_token")

    Function("saveToken") { token: String ->
      try {
        val context = appContext.reactContext ?: return@Function false
        val accountManager = AccountManager.get(context)

        val accounts = accountManager.getAccountsByType(accountType)
        val account =
                accounts.firstOrNull()
                        ?: run {
                          val newAccount = Account(accountName, accountType)
                          val added = accountManager.addAccountExplicitly(newAccount, null, null)
                          if (!added) {
                            return@Function false
                          }
                          newAccount
                        }

        accountManager.setUserData(account, "auth_token", token)
        true
      } catch (e: Exception) {
        e.printStackTrace()
        false
      }
    }

    Function("getToken") {
      val context = appContext.reactContext!!
      val accountManager = AccountManager.get(context)

      try {
        val accounts = accountManager.getAccountsByType(accountType)
        val account = accounts.firstOrNull() ?: return@Function null

        accountManager.getUserData(account, "auth_token")
      } catch (e: Exception) {
        null
      }
    }

    Function("clearToken") {
      // val context = appContext.reactContext!!
      // val accountManager = AccountManager.get(context)
      // val accounts = accountManager.getAccountsByType(accountType)
      // val account = accounts.firstOrNull() ?: return@Function false

      // accountManager.removeAccountExplicitly(account)
      // true
    }
  }
}
