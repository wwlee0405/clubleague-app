import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const BottomTab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Home" lazy="true"  >
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Search" component={Search} />
        <BottomTab.Screen name="Notifications" component={Notifications} />
        <BottomTab.Screen name="Profile" component={Profile} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
