package expo.modules.savingsharedtoken

import android.app.Service
import android.content.Intent
import android.os.IBinder

class MyAuthenticatorService : Service() {


    override fun onBind(intent: Intent?): IBinder {
            var authenticator=MyAuthenticator(this)
        return authenticator.iBinder
    }
}
