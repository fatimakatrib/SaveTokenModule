package expo.modules.savingsharedtoken

import android.accounts.Account
import android.accounts.AccountManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class Saving_shared_tokenModule : Module() {


  companion object {
    private const val ACCOUNT_TYPE = "com.example.myapp"
    private const val ACCOUNT_NAME = "Orbit Now"
    private const val AUTH_TOKEN_TYPE = "test"
    private const val USER_DATA_LAST_KEY = "last_token"
  }


  override fun definition() = ModuleDefinition {
    Name("Saving_shared_token")

 
    Function("saveToken") { token: String ->
      val context = appContext.reactContext ?: return@Function false
      val am = AccountManager.get(context)
      val account = Account(ACCOUNT_NAME, ACCOUNT_TYPE)

      if (am.getAccountsByType(ACCOUNT_TYPE).none { it.name == ACCOUNT_NAME }) {
        if (!am.addAccountExplicitly(account, null, null)) {
          return@Function false
        }
      }

      am.invalidateAuthToken(ACCOUNT_TYPE,  null)
      am.setAuthToken(account, AUTH_TOKEN_TYPE, token)
      am.setUserData(account, USER_DATA_LAST_KEY, token) 

      return@Function true
    }

    Function("getToken") {
      val context = appContext.reactContext!!
      val am = AccountManager.get(context)
            val accounts = am.getAccountsByType(ACCOUNT_TYPE)
            var token = null
            if (accounts.isNotEmpty()) {
                 token = am.blockingGetAuthToken(accounts[0], AUTH_TOKEN_TYPE, true)
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
      val context = appContext.reactContext!!
      val am = AccountManager.get(context)
      val accounts = am.getAccountsByType(ACCOUNT_TYPE)

      if (accounts.isNotEmpty()) {
        val account = accounts[0]
        return@Function accountManager.removeAccountExplicitly(account)
      }

      return@Function false
    }
  }
}
