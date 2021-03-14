import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile214744Navigator from '../features/UserProfile214744/navigator';
import Settings214743Navigator from '../features/Settings214743/navigator';
import Settings214741Navigator from '../features/Settings214741/navigator';
import SignIn2214739Navigator from '../features/SignIn2214739/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile214744: { screen: UserProfile214744Navigator },
Settings214743: { screen: Settings214743Navigator },
Settings214741: { screen: Settings214741Navigator },
SignIn2214739: { screen: SignIn2214739Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
