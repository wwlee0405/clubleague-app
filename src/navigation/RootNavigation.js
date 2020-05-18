import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import Splash from "../screens/Auth/Splash";

const RootStack = createStackNavigator();

const RootNavigation = ({ navigation }) => (
  <RootStack.Navigator headerMode='none'>
    <RootStack.Screen name="Splash" component={Splash} />
    <RootStack.Screen name="SignIn" component={SignIn} />
    <RootStack.Screen name="SignUp" component={SignUp} />
  </RootStack.Navigator>
);

export default RootNavigation;
