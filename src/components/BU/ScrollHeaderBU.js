import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons';
import colors from "../../../colors";
import { useNavigation } from '@react-navigation/native';

const ScrollHeader = ({
    onPress
  }) => {
  return (
    <View style={{
       // marginTop:Constant.statusBarHeight,
        position:"absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: colors.blackColor,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 4,
    }}>
      <View style={{
          flexDirection:"row",
          margin: 20
      }}>
         <TouchableOpacity onPress={onPress}>
           <AntDesign
            style={{
                marginLeft:20
            }}
            name="youtube" size={40} color="red"/>
         </TouchableOpacity>
         <Text style={{
             fontSize:22,
             marginLeft:5,
             color:colors.emerald,
             fontWeight:"bold"
         }}>YouTube</Text>
      </View>
      <View style={{
          flexDirection:"row",
          justifyContent:"space-around",
          width:150,
          margin: 20
      }}>
       <Ionicons name="md-videocam" size={32} color={colors.emerald} />
       <Ionicons name="md-search" size={32} color={colors.emerald} />
       <MaterialIcons name="account-circle" size={32} color={colors.emerald} />
      </View>
    </View>
  );
};


export default ScrollHeader;
