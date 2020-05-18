import * as React from 'react';
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../screens/Home";
import Details from "../screens/Details";
import Details2 from "../screens/Details2";
import Details3 from "../screens/Details3";
import Match from "../screens/Match/Match";
import Writing from "../screens/Match/Writing";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile/Profile";
import Setting from "../screens/Profile/Setting";
import SearchClub from "../screens/Search/SearchClub";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../../colors"

const BottomTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

const MainNavigation = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    activeColor= "white"
    shifting= {true}
    barStyle={{ backgroundColor: 'white' }}
  >
    <BottomTab.Screen
      name="Home"
      component={CreateHomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: colors.emerald,
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={24} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Match"
      component={CreateMatchStack}
      options={{
        tabBarLabel: 'Match',
        tabBarColor: "#694fad",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="soccer-field" color={color} size={24} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarLabel: 'Notifications',
        tabBarColor: "#d02860",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={24} />
        ),
      }}
    />
  </BottomTab.Navigator>
);

export default MainNavigation;

const CreateHomeStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.emerald },
    }}
  >
    <Stack.Screen
      name ="Home"
      component={Home}
      options={{
        headerLeft: () => (<MaterialCommunityIcons name="soccer" size={30} style={{ paddingLeft: 10, color: colors.sacramento }} />),
        headerTitle: <Text style={{ fontWeight: 'bold', fontSize: 18, color: colors.sacramento }}>Clubleague</Text>,
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchClub')}
              title="SearchClub"
            >
              <Feather name="search" size={25} style={{ paddingRight: 20, color: colors.sacramento }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              title="Profile"
            >
              <Feather name="user" size={25} style={{ paddingRight: 10, color: colors.sacramento }} />
            </TouchableOpacity>
          </View>
        )
      }}
    />
    <Stack.Screen
      name ="Profile"
      component={Profile}
      options={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Setting')}
            title="Setting"
          >
            <MaterialCommunityIcons name="settings" size={25} style={{ paddingRight: 20, color: colors.sacramento }} />
          </TouchableOpacity>
        )
      }}
    />
    <Stack.Screen name ="Setting" component={Setting} />
    <Stack.Screen name ="SearchClub" component={SearchClub} />
    <Stack.Screen name ="Details" component={CreateMaterialTopTab} />
  </Stack.Navigator>
);

const CreateMatchStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#694fad" }
    }}
  >
    <Stack.Screen
      name ="Match"
      component={Match}
      options={{
        headerLeft: () => (<MaterialCommunityIcons name="soccer" size={30} style={{ paddingLeft: 10, color: colors.sacramento }} />),
        headerTitle: <Text style={{ fontWeight: 'bold', fontSize: 18, color: colors.sacramento }}>Clubleague</Text>,
        headerRight: () => (
          <TouchableOpacity
          onPress={() => navigation.navigate('Writing')}
          title="Writing"
        >
          <Feather name="edit" size={25} style={{ paddingRight: 10, color: colors.sacramento }} />
        </TouchableOpacity>
        )
      }}
    />
    <Stack.Screen name ="Writing" component={Writing} options={Writing.navigationOptions} />
    <Stack.Screen name ="Details" component={CreateMaterialTopTab} />
  </Stack.Navigator>
);

const CreateMaterialTopTab = () => (
  <MaterialTopTab.Navigator
    tabBarOptions={{
      activeTintColor: '#e91e63',
      labelStyle: { fontSize: 12 },
      tabStyle: { height: 40 },
      style: { backgroundColor: 'powderblue' },
    }}
  >
    <MaterialTopTab.Screen name="Details" component={Details} options={{ tabBarLabel: 'Home' }} />
    <MaterialTopTab.Screen name="Details2" component={Details2} options={{ tabBarLabel: 'VV' }} />
    <MaterialTopTab.Screen name="Details3" component={Details3} options={{ tabBarLabel: 'schedule' }} />
  </MaterialTopTab.Navigator>
);
