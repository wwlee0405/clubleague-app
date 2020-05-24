import * as React from 'react';
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../screens/Home/Home";
import DetailsHome from "../screens/Home/DetailsHome";
import Details2 from "../screens/Home/Details2";
import Details3 from "../screens/Home/Details3";
import Details4 from "../screens/Home/Details4";
import Details5 from "../screens/Home/Details5";
import Match from "../screens/Match/Match";
import FeedCardDetailsScreen from "../screens/Match/FeedCardDetailsScreen";
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
    activeColor= {colors.emerald}
    shifting= {true}
    barStyle={{ backgroundColor: 'white' }}
  >
    <BottomTab.Screen
      name="Home"
      component={CreateHomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: colors.white,
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
        tabBarColor: colors.white,
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
        tabBarColor: colors.white,
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
      headerStyle: { backgroundColor: colors.white },
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
    <Stack.Screen name ="FeedCardDetailsScreen" component={FeedCardDetailsScreen} />
  </Stack.Navigator>
);

const CreateMatchStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.white }
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
    <Stack.Screen name ="FeedCardDetailsScreen" component={FeedCardDetailsScreen} />
    <Stack.Screen name ="Details" component={CreateMaterialTopTab} />

  </Stack.Navigator>
);

const CreateMaterialTopTab = () => (
  <MaterialTopTab.Navigator
    tabBarOptions={{
      activeTintColor: 'powderblue',
      labelStyle: { fontSize: 12 },
      tabStyle: { height: 40 },
      style: { backgroundColor: colors.white },
    }}
  >
    <MaterialTopTab.Screen name="DetailsHome" component={DetailsHome} options={{ tabBarLabel: 'Home' }} />
    <MaterialTopTab.Screen name="Details2" component={Details2} options={{ tabBarLabel: 'Schedule' }} />
    <MaterialTopTab.Screen name="Details3" component={Details3} options={{ tabBarLabel: 'Players' }} />
    <MaterialTopTab.Screen name="Details4" component={Details4} options={{ tabBarLabel: 'Info' }} />
    <MaterialTopTab.Screen name="Details5" component={Details5} options={{ tabBarLabel: 'Setting' }} />
  </MaterialTopTab.Navigator>
);
