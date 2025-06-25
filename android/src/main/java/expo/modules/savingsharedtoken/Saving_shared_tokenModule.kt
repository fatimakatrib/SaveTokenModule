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
         val account = Account("MyAccount", "com.example.myapp")
        val context = appContext.reactContext ?: return@Function false
        val accountManager = AccountManager.get(context)

        if (accountManager.addAccountExplicitly(account, null, null)) {
            accountManager.setAuthToken(account, "test", token)
        }
    }

    Function("getToken") {
      val context = appContext.reactContext!!
      val am = AccountManager.get(context)
            val accounts = am.getAccountsByType("com.example.myapp")
            var token = "starter"
            if (accounts.isNotEmpty()) {
                 token = am.blockingGetAuthToken(accounts[0], "test", true)
            }
            return@Function token
    }

    //     Function("getToken") {
    //   val context = appContext.reactContext!!
    //   val accountManager = AccountManager.get(context)

    //   try {
    //     val accounts = accountManager.getAccountsByType(accountType)
    //     val account = accounts.firstOrNull() ?: return@Function null

    //     accountManager.getUserData(account, "auth_token")
    //   } catch (e: Exception) {
    //     null
    //   }
    // }

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
