package expo.modules.savingsharedtoken

import android.accounts.Account
import android.accounts.AccountManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class Saving_shared_tokenModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("Saving_shared_token")

    Function("saveToken") { token: String ->
      val accountType = "com.example.myapp" // Customize this string
      val accountName = "Orbit Now"
      val context = appContext.reactContext
      val accountManager = AccountManager.get(context)

      // Try to find an existing account
      val accounts = accountManager.getAccountsByType(accountType)
      val account =
              accounts.firstOrNull()
                      ?: run {
                        // Create a new account if none exist
                        val newAccount = Account(accountName, accountType)
                        val added = accountManager.addAccountExplicitly(newAccount, null, null)
                        if (!added) {
                          // throw Exception("Failed to create account") // may crash the app //
                        }
                        newAccount
                      }

      // Save the token as userData
      accountManager.setUserData(account, "auth_token", token)
    }

    Function("getToken") {
      val accountType = "com.example.myapp"
      val context = appContext.reactContext
      val accountManager = AccountManager.get(context)

      val accounts = accountManager.getAccountsByType(accountType)
      val account = accounts.firstOrNull() ?: return@Function null

      // Read the saved token
      return@Function accountManager.getUserData(account, "auth_token")
    }

    Function("clearToken") {
      val account = Account("shared_token_account", "com.example.myapp")
      val manager = AccountManager.get(appContext.reactContext!!)
      manager.removeAccountExplicitly(account)
      true
    }
  }
}
