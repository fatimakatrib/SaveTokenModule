package expo.modules.savingsharedtoken

import android.accounts.*
import android.content.Context
import android.os.Bundle

class MyAuthenticator(private val context: Context) : AbstractAccountAuthenticator(context) {

    override fun addAccount(
            response: AccountAuthenticatorResponse,
            accountType: String,
            authTokenType: String?,
            requiredFeatures: Array<out String>?,
            options: Bundle?
    ): Bundle {
        return Bundle()
    }

    override fun getAuthToken(
            response: AccountAuthenticatorResponse,
            account: Account,
            authTokenType: String,
            options: Bundle?
    ): Bundle {
        val am = AccountManager.get(context)
        val token = am.peekAuthToken(account, authTokenType)

        return if (!token.isNullOrEmpty()) {
            Bundle().apply {
                putString(AccountManager.KEY_ACCOUNT_NAME, account.name)
                putString(AccountManager.KEY_ACCOUNT_TYPE, account.type)
                putString(AccountManager.KEY_AUTHTOKEN, token)
            }
        } else {
            // If no token is found, just return an empty bundle.
            // You can handle the re-login in your own UI manually.
            Bundle().apply { putString(AccountManager.KEY_ERROR_MESSAGE, "Token not available.") }
        }
    }

    override fun getAuthTokenLabel(authTokenType: String): String = authTokenType
    override fun confirmCredentials(
            response: AccountAuthenticatorResponse,
            account: Account,
            options: Bundle?
    ): Bundle? = null
    override fun editProperties(
            response: AccountAuthenticatorResponse,
            accountType: String
    ): Bundle = Bundle()
    override fun updateCredentials(
            response: AccountAuthenticatorResponse,
            account: Account,
            authTokenType: String?,
            options: Bundle?
    ): Bundle? = null
    override fun hasFeatures(
            response: AccountAuthenticatorResponse,
            account: Account,
            features: Array<out String>
    ): Bundle = Bundle().apply { putBoolean(AccountManager.KEY_BOOLEAN_RESULT, false) }
}
