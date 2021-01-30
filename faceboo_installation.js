ios:
  npm install fbsdk on react
  go to ios and pod install
  create new fb app and copy the bundle indentifer into facebook developer
  create empy swift file in xocde with header bridge
  copy below into info.plist:
  <key>CFBundleURLTypes</key>
<array>
  <dict>
  <key>CFBundleURLSchemes</key>
  <array>
    <string>appId</string>
  </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>appId</string>
<key>FacebookDisplayName</key>
<string>4u</string>
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>fbapi</string>
  <string>fbapi20130214</string>
  <string>fbapi20130410</string>
  <string>fbapi20130702</string>
  <string>fbapi20131010</string>
  <string>fbapi20131219</string>
  <string>fbapi20140410</string>
  <string>fbapi20140116</string>
  <string>fbapi20150313</string>
  <string>fbapi20150629</string>
  <string>fbapi20160328</string>
  <string>fbauth</string>
  <string>fb-messenger-share-api</string>
  <string>fbauth2</string>
  <string>fbshareextension</string>
</array>

follow this
https://aboutreact.com/react-native-facebook-login/
Android:
  go here
  https://www.youtube.com/watch?v=lptfpgnwuZM&t=186s
