install vector icons:
   ios:
      open space from ios in xcode
      create new group  just above libaries folder
      copy fonts from node_modules to that folder (ensure copy items, create  folder ticked)
      open plist and each item
      turn off server
      pod install
      clean and run xcode
      done:)

    android:
    got setting.graddle in insert these
    include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
run android

if does not work, visit here https://aboutreact.com/react-native-vector-icons/

/***************************************************************************/

how to install custom fonts
   Android:
   in main we should have assets/fonts,
   add whatever fonts.ttf to it
   and run the project

   ios:
   go to project space and open in xcode
   go the Fonts folder
   drag fonts to it
   go to build phases , under copy bundle resources
   add fonts,
   run the project
/****************************************************************************************/
