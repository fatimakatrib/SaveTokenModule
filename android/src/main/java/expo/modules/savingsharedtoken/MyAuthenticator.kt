package expo.modules.savingsharedtoken

import android.accounts.AbstractAccountAuthenticator
import android.content.Context
import android.os.Bundle
import android.accounts.Account
import android.accounts.AccountAuthenticatorResponse

class MyAuthenticator(context: Context) : AbstractAccountAuthenticator(context) {
    override fun editProperties(response: AccountAuthenticatorResponse?, accountType: String?) = null
    override fun addAccount(response: AccountAuthenticatorResponse?, accountType: String?, authTokenType: String?, requiredFeatures: Array<out String>?, options: Bundle?) = null
    override fun confirmCredentials(response: AccountAuthenticatorResponse?, account: Account?, options: Bundle?) = null
    override fun getAuthToken(response: AccountAuthenticatorResponse?, account: Account?, authTokenType: String?, options: Bundle?) = null
    override fun getAuthTokenLabel(authTokenType: String?) = null
    override fun updateCredentials(response: AccountAuthenticatorResponse?, account: Account?, authTokenType: String?, options: Bundle?) = null
    override fun hasFeatures(response: AccountAuthenticatorResponse?, account: Account?, features: Array<out String>?) = null
}
