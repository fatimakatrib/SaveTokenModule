package expo.modules.savingsharedtoken

import android.app.Service
import android.content.Intent
import android.os.IBinder

class MyAuthenticatorService : Service() {

    private lateinit var authenticator: MyAuthenticator

    override fun onCreate() {
        super.onCreate()
        authenticator = MyAuthenticator(this)
    }

    override fun onBind(intent: Intent?): IBinder? {
        return authenticator.iBinder
    }
}
