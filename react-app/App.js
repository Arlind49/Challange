import * as React from 'react';
import {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';



// Screens for the tabs
import HomeScreen from './screens/HomeScreen'; 
import SettingsScreen from './screens/SettingsScreen'; 
import AboutScreen from './screens/AboutScreen'; 
import HelloScreen from './screens/HelloScreen'; 
import ByeScreen from './screens/ByeScreen'; 
import GjesiScreen from './screens/GjesiScreen'; 




// Tab navigator setup
const Tab = createBottomTabNavigator();

// Drawer navigator setup
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Hello" component={HelloScreen} />
        <Drawer.Screen name="Gjesi" component={GjesiScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
