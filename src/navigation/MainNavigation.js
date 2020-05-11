import * as React from 'react';
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../screens/Home";
import Details from "../screens/Details";
import Details2 from "../screens/Details2";
import Details3 from "../screens/Details3";
import Match from "../screens/Match/Match";
import Writing from "../screens/Match/Writing";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile/Profile";
import SearchClub from "../screens/Search/SearchClub";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../../colors"

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.emerald,
        inactiveTintColor: '#999',
        showLabel: true,
        showIcon: true,
        style: {
          backgroundColor: 'white',
          borderTopWidth: 0
        }
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={CreateHomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Match"
        component={CreateMatchStack}
        options={{
          tabBarLabel: 'Match',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="soccer-field" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const CreateHomeStack = ({navigation}) => (
  <Stack.Navigator >
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
    <Stack.Screen name ="Profile" component={Profile} />
    <Stack.Screen name ="SearchClub" component={SearchClub} />
    <Stack.Screen name ="Details" component={CreateMaterialTopTab} />
  </Stack.Navigator>
);

const CreateMatchStack = ({navigation}) => (
  <Stack.Navigator >
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
    <Stack.Screen name ="Writing" component={Writing} />
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
)

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
