How to install google auth
 ios:
    create ios project in firebase
    download the googelSerice-info.plist

    copy the plist to project in xcode (just above the folder where you have appDelgate)
    in appDelg.m insert this @import Firebase;
    then under  self.window.rootViewController = rootViewController;
    [self.window makeKeyAndVisible];
    insert   [FIRApp configure];
    go main root in xcode and go to info => url type and copy reserved client id to interval
    terminate any running app
    clean and build

    in the vscode
    go to ios folder and add
    pod 'GoogleSignIn', '~> 5.0.2'
    then => pod install
    if error run : pod install --repo-update

  android:
    https://dev.to/anwargul0x/get-started-with-react-native-google-sign-in-18i5
