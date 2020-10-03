import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home/Home";
import DetailsHome from "../screens/Home/DetailsHome";
import DetailsSchedule from "../screens/Home/DetailsSchedule";
import DetailsPlayers from "../screens/Home/DetailsPlayers";
import DetailsInfo from "../screens/Home/DetailsInfo";
import DetailsSetting from "../screens/Home/DetailsSetting";
import Match from "../screens/Match/Match";
import FeedDetails from "../screens/Match/FeedDetails";
import Entry from "../screens/Match/Entry";
import Writing from "../screens/Match/Writing";
import Notification from "../screens/Notification/Notification";
import Profile from "../screens/Profile/Profile";
import UserDetail from "../screens/Profile/UserDetail";
import EditProfile from "../screens/Profile/EditProfile";
import Setting from "../screens/Profile/Setting";
import ClubSetting from "../screens/Home/ClubSetting";
import SearchClub from "../screens/Search/SearchClub";
import NewClub from "../screens/Home/NewClub";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../../colors"

import { useLogOut } from "../../AuthContext";

const BottomTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

function BottomTabs() {
   return (
      <BottomTab.Navigator
         initialRouteName="Home"
         activeColor={colors.emerald}
         inactiveColor={colors.darkGreyColor}
         shifting={true}
         barStyle={{ backgroundColor: colors.white }}
      >
         <BottomTab.Screen
            name="Home"
            component={CreateHomeStack}
            options={{
               tabBarLabel: "Home",
               tabBarIcon: ({ color, size }) => (
                  <Feather name="home" color={color} size={24} />
               ),
            }}
         />
         <BottomTab.Screen
            name="Match"
            component={CreateMatchStack}
            options={{
               tabBarLabel: "Match",
               tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                     name="soccer-field"
                     color={color}
                     size={24}
                  />
               ),
            }}
         />
         <BottomTab.Screen
            name="Notifications"
            component={CreateNotificationStack}
            options={{
               tabBarLabel: "Updates",
               tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={24} />
               ),
            }}
         />
      </BottomTab.Navigator>
   );
}

const CreateHomeStack = ({ route, navigation }) => {
   const logOut = useLogOut();

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: { backgroundColor: colors.white },
         }}
      >
         <Stack.Screen
            name="Home"
            component={Home}
            options={{
               headerLeft: () => (
                  <MaterialCommunityIcons
                     name="soccer"
                     size={30}
                     style={{ paddingLeft: 10 }}
                     onPress={() => {
                        logOut(true);
                     }}
                  />
               ),
               headerTitle: (
                  <Text
                     style={{
                        fontWeight: "bold",
                        fontSize: 18
                     }}
                  >
                     Clubleague
                  </Text>
               ),
               headerRight: () => (
                  <View style={{ flexDirection: "row" }}>
                     <TouchableOpacity
                        onPress={() => navigation.navigate("SearchClub")}
                        title="SearchClub"
                     >
                        <Feather
                           name="search"
                           size={25}
                           style={{ paddingRight: 20 }}
                        />
                     </TouchableOpacity>
                     <TouchableOpacity
                        onPress={() => navigation.navigate("Profile")}
                        title="Profile"
                     >
                        <Feather
                           name="user"
                           size={25}
                           style={{ paddingRight: 10 }}
                        />
                     </TouchableOpacity>
                  </View>
               ),
            }}
         />
         <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
               headerRight: () => (
                  <TouchableOpacity
                     onPress={() => navigation.navigate("Setting")}
                     title="Writing"
                  >
                     <Feather
                        name="settings"
                        size={25}
                        style={{ paddingRight: 10 }}
                     />
                  </TouchableOpacity>
               ),
            }}
         />
         <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={EditProfile.navigationOptions}
         />
         <Stack.Screen name="Setting" component={Setting} />
         <Stack.Screen
            name="SearchClub"
            component={SearchClub}
            options={SearchClub.navigationOptions}
         />
         <Stack.Screen
            name="NewClub"
            component={NewClub}
            options={NewClub.navigationOptions}
         />
         <Stack.Screen
            name="Details"
            children={CreateMaterialTopTab}
						options={({route}) => ({
							headerTransparent: false,
							title: route.params.teamId
						})}
         />
         <Stack.Screen name="FeedDetails" component={FeedDetails} />
         <Stack.Screen name="Entry" component={Entry} />
         <Stack.Screen name="ClubSetting" component={ClubSetting} />
      </Stack.Navigator>
   );
};

const CreateMatchStack = ({ navigation }) => (
   <Stack.Navigator
      screenOptions={{
         headerStyle: { backgroundColor: colors.white },
      }}
   >
      <Stack.Screen
         name="Match"
         component={Match}
         options={{
            headerLeft: () => (
               <MaterialCommunityIcons
                  name="soccer"
                  size={30}
                  style={{ paddingLeft: 10 }}
               />
            ),
            headerTitle: (
               <Text
                  style={{
                     fontWeight: "bold",
                     fontSize: 18
                  }}
               >
                  Clubleague
               </Text>
            ),
            headerRight: () => (
               <TouchableOpacity
                  onPress={() => navigation.navigate("Writing")}
                  title="Writing"
               >
                  <Feather
                     name="edit"
                     size={25}
                     style={{ paddingRight: 10 }}
                  />
               </TouchableOpacity>
            ),
         }}
      />
      <Stack.Screen
         name="Writing"
         component={Writing}
         options={Writing.navigationOptions}
      />
      <Stack.Screen name="Details" component={CreateMaterialTopTab} />
      <Stack.Screen name="FeedDetails" component={FeedDetails} />
      <Stack.Screen name="Entry" component={Entry} />
      <Stack.Screen
         name="Profile"
         component={Profile}
         options={{
            headerRight: () => (
               <TouchableOpacity
                  onPress={() => navigation.navigate("Setting")}
                  title="Writing"
               >
                  <Feather
                     name="settings"
                     size={25}
                     style={{ paddingRight: 10 }}
                  />
               </TouchableOpacity>
            ),
         }}
      />
      <Stack.Screen
         name="EditProfile"
         component={EditProfile}
         options={EditProfile.navigationOptions}
      />
      <Stack.Screen name="Setting" component={Setting} />
   </Stack.Navigator>
);

const CreateNotificationStack = ({ navigation }) => (
   <Stack.Navigator
      screenOptions={{
         headerStyle: { backgroundColor: colors.white },
      }}
   >
      <Stack.Screen
         name="Notification"
         component={Notification}
         options={{
            headerLeft: () => (
               <MaterialCommunityIcons
                  name="soccer"
                  size={30}
                  style={{ paddingLeft: 10 }}
               />
            ),
            headerTitle: (
               <Text
                  style={{
                     fontWeight: "bold",
                     fontSize: 18
                  }}
               >
                  Clubleague
               </Text>
            ),
            headerRight: () => (
               <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                  title="Profile"
               >
                  <Feather
                     name="user"
                     size={25}
                     style={{ paddingRight: 10 }}
                  />
               </TouchableOpacity>
            ),
         }}
      />
      <Stack.Screen name="Details" component={CreateMaterialTopTab} />
      <Stack.Screen name="FeedDetails" component={FeedDetails} />
      <Stack.Screen name="Entry" component={Entry} />
      <Stack.Screen
         name="Profile"
         component={Profile}
         options={{
            headerRight: () => (
               <TouchableOpacity
                  onPress={() => navigation.navigate("Setting")}
                  title="Writing"
               >
                  <Feather
                     name="settings"
                     size={25}
                     style={{ paddingRight: 10 }}
                  />
               </TouchableOpacity>
            ),
         }}
      />
      <Stack.Screen
         name="EditProfile"
         component={EditProfile}
         options={EditProfile.navigationOptions}
      />
      <Stack.Screen name="Setting" component={Setting} />
   </Stack.Navigator>
);

const CreateMaterialTopTab = () => (
   <MaterialTopTab.Navigator
      tabBarOptions={{
         activeTintColor: colors.blackColor,
         labelStyle: { fontSize: 9 },
         tabStyle: { height: 40 },
         style: { backgroundColor: colors.white },
      }}
   >
      <MaterialTopTab.Screen
         name="DetailsHome"
         component={DetailsHome}
         options={{ tabBarLabel: "Home" }}
      />
      <MaterialTopTab.Screen
         name="DetailsSchedule"
         component={DetailsSchedule}
         options={{ tabBarLabel: "Schedule" }}
      />
      <MaterialTopTab.Screen
         name="DetailsPlayers"
         component={DetailsPlayers}
         options={{ tabBarLabel: "Players" }}
      />
      <MaterialTopTab.Screen
         name="DetailsInfo"
         component={DetailsInfo}
         options={{ tabBarLabel: "Info" }}
      />
      <MaterialTopTab.Screen
         name="DetailsSetting"
         component={DetailsSetting}
         options={{ tabBarLabel: "Setting" }}
      />
   </MaterialTopTab.Navigator>
);

export default function MainNavigation() {
   return (
      <NavigationContainer>
         <BottomTabs />
      </NavigationContainer>
   );
}
