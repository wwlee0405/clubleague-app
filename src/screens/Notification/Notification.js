import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import NotificationCard from "../../components/contents/NotificationCard";


export default ({ onPress, noticeOnPress, navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <NotificationCard
          onPress={() => navigation.navigate('FeedDetails')}
          noticeOnPress={() => navigation.navigate('Profile')}
          username="Son"
          text="게임을 요청합니다."
          time="PM 3:43"
        />

      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: colors.clBackgroundColor,
  },
});
