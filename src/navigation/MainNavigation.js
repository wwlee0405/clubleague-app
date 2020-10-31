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
import SearchClub from "../screens/Search/SearchClub";
import SearchMatch from "../screens/Search/SearchMatch";
import NewClub from "../screens/Home/NewClub";

import DtBasicInfo from "../screens/Setting/DtBasicInfo";
import DtCoLeader from "../screens/Setting/DtCoLeader";
import DtEmpowerment from "../screens/Setting/DtEmpowerment";
import DtForcedWithdrawal from "../screens/Setting/DtForcedWithdrawal";
import DtJoinQualification from "../screens/Setting/DtJoinQualification";
import DtJoinQuestion from "../screens/Setting/DtJoinQuestion";

import Help from "../screens/Setting/Help";
import Language from "../screens/Setting/Language";
import PushSetting from "../screens/Setting/PushSetting";

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../../colors"

import { useLogOut } from "../../AuthContext";

const RootStack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const ModalStack = createStackNavigator();
const MainStack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

export default function MainNavigation() {
   return (
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          mode="modal"
          headerMode="none"
        >
          <RootStack.Screen name="BottomTabs" component={BottomTabs} />
          <RootStack.Screen name="FeedDetails" component={CreateModalStack} />
        </RootStack.Navigator>
      </NavigationContainer>
   );
}

const BottomTabs = ({ navigation }) => (
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
           tabBarLabel: "Notifications",
           tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={24} />
           ),
        }}
     />
  </BottomTab.Navigator>
);

const CreateModalStack = ({ navigation }) => (
  <ModalStack.Navigator
    mode="modal"
    headerMode="float"
  >
    <ModalStack.Screen name="FeedDetails"
      component={FeedDetails}
      options={{
            headerShown: false,
            title: "Lionel Messi"
          }}

    />
    <ModalStack.Screen name="Entry" component={Entry} />
  </ModalStack.Navigator>
);

const CreateHomeStack = ({ route, navigation }) => {
   const logOut = useLogOut();

   return (
      <MainStack.Navigator
         screenOptions={{
            headerStyle: { backgroundColor: colors.white },
         }}
      >
         <MainStack.Screen
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
         <MainStack.Screen
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
         <MainStack.Screen
            name="EditProfile"
            component={EditProfile}
            options={EditProfile.navigationOptions}
         />
         <MainStack.Screen name="Setting" component={Setting} />
         <MainStack.Screen
            name="SearchClub"
            component={SearchClub}
            options={SearchClub.navigationOptions}
         />
         <MainStack.Screen
            name="NewClub"
            component={NewClub}
            options={NewClub.navigationOptions}
         />
         <MainStack.Screen
            name="Details"
            children={CreateMaterialTopTab}
						options={({route}) => ({
							headerTransparent: false,
							title: route.params.teamId
						})}
         />
         <MainStack.Screen name="FeedDetails" component={FeedDetails} options={{headerShown: false}} />
         <MainStack.Screen name="Entry" component={Entry} />
         <MainStack.Screen name="DtBasicInfo" component={DtBasicInfo} />
         <MainStack.Screen name="DtCoLeader" component={DtCoLeader} />
         <MainStack.Screen name="DtEmpowerment" component={DtEmpowerment} />
         <MainStack.Screen name="DtForcedWithdrawal" component={DtForcedWithdrawal} />
         <MainStack.Screen name="DtJoinQualification" component={DtJoinQualification} />
         <MainStack.Screen name="DtJoinQuestion" component={DtJoinQuestion} />
         <MainStack.Screen name="Help" component={Help} />
         <MainStack.Screen name="Language" component={Language} />
         <MainStack.Screen name="PushSetting" component={PushSetting} />

      </MainStack.Navigator>
   );
};

const CreateMatchStack = ({ navigation }) => (
   <MainStack.Navigator
      screenOptions={{
         headerStyle: { backgroundColor: colors.white },
      }}
   >
      <MainStack.Screen
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
      <MainStack.Screen
         name="Writing"
         component={Writing}
         options={Writing.navigationOptions}
      />
      <MainStack.Screen name="Details" component={CreateMaterialTopTab} />
      <MainStack.Screen
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
      <MainStack.Screen
         name="EditProfile"
         component={EditProfile}
         options={EditProfile.navigationOptions}
      />
      <MainStack.Screen name="FeedDetails" component={FeedDetails} options={{headerShown: false}} />
      <MainStack.Screen name="Entry" component={Entry} />
      <MainStack.Screen name="Setting" component={Setting} />
      <MainStack.Screen name="SearchMatch" component={SearchMatch} options={SearchMatch.navigationOptions} />
      <MainStack.Screen name="DtBasicInfo" component={DtBasicInfo} />
      <MainStack.Screen name="DtCoLeader" component={DtCoLeader} />
      <MainStack.Screen name="DtEmpowerment" component={DtEmpowerment} />
      <MainStack.Screen name="DtForcedWithdrawal" component={DtForcedWithdrawal} />
      <MainStack.Screen name="DtJoinQualification" component={DtJoinQualification} />
      <MainStack.Screen name="DtJoinQuestion" component={DtJoinQuestion} />
      <MainStack.Screen name="Help" component={Help} />
      <MainStack.Screen name="Language" component={Language} />
      <MainStack.Screen name="PushSetting" component={PushSetting} />
   </MainStack.Navigator>
);

const CreateNotificationStack = ({ navigation }) => (
   <MainStack.Navigator
      screenOptions={{
         headerStyle: { backgroundColor: colors.white },
      }}
   >
      <MainStack.Screen
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
      <MainStack.Screen name="Details" component={CreateMaterialTopTab} />
      <MainStack.Screen
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
      <MainStack.Screen
         name="EditProfile"
         component={EditProfile}
         options={EditProfile.navigationOptions}
      />
      <MainStack.Screen name="FeedDetails" component={FeedDetails} />
      <MainStack.Screen name="Entry" component={Entry} />
      <MainStack.Screen name="Setting" component={Setting} />
      <MainStack.Screen name="DtBasicInfo" component={DtBasicInfo} />
      <MainStack.Screen name="DtCoLeader" component={DtCoLeader} />
      <MainStack.Screen name="DtEmpowerment" component={DtEmpowerment} />
      <MainStack.Screen name="DtForcedWithdrawal" component={DtForcedWithdrawal} />
      <MainStack.Screen name="DtJoinQualification" component={DtJoinQualification} />
      <MainStack.Screen name="DtJoinQuestion" component={DtJoinQuestion} />
      <MainStack.Screen name="Help" component={Help} />
      <MainStack.Screen name="Language" component={Language} />
      <MainStack.Screen name="PushSetting" component={PushSetting} />
   </MainStack.Navigator>
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
