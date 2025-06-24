const fs = require('node:fs');
const folderPath = '../../android/app/src/main/res/xml'
const path = require('path');
const fileName = 'authenticator.xml';
const fullPath = path.join(folderPath, fileName);

const filnameSecond = 'account_preferences.xml'
const fullPathSecond = path.join(folderPath, filnameSecond);

const fileContent = `<?xml version="1.0" encoding="utf-8"?>
<account-authenticator xmlns:android="http://schemas.android.com/apk/res/android"
    android:accountType="com.example.myapp"
    android:icon="@mipmap/ic_launcher"
    android:smallIcon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:accountPreferences="@xml/account_preferences" />
`;

const fileContentSecond = `<?xml version="1.0" encoding="utf-8"?>
<preferences xmlns:android="http://schemas.android.com/apk/res/candroid">
</preferences>`

fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating folder:', err);
        return
    }
    else {
        fs.writeFile(fullPath, fileContent, (err) => {
            if (err) {
                console.error('Error creating file:', err);
            } else {
                console.log(`File '${fileName}' created successfully in '${folderPath}'`);
            }
        });
        fs.writeFile(fullPathSecond, fileContentSecond, (err) => {
            if (err) {
                console.error('Error creating file:', err);
            } else {
                console.log(`File '${fullPathSecond}' created successfully in '${fileContentSecond}'`);
            }
        });
        console.log('Folder created successfully!');
    }
});



