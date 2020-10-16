import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../../colors';

const NotificationCard = ({ onPress, noticeOnPress, username, text, time }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.noticeWrap}>

          <View style={styles.leftWrap}>
            <TouchableOpacity onPress={noticeOnPress}>
              <Image
                source={require('../../data/ImgTest/cccc.jpg')}
                style={styles.avatar}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.bodyWrap}>
            <Text style={styles.textTop}>{username}</Text>
            <Text style={styles.textBottom}>{text}</Text>
          </View>

          <View style={styles.rightWrap}>
            <Text style={styles.textTime}>{time}</Text>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  );
};


export default NotificationCard;


const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginTop: 3,
    marginBottom: 3,
  },
  noticeWrap: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  leftWrap: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  bodyWrap: {
    flex: 3,
    paddingLeft: 10,
  },
  textTop: {
    fontWeight: 'bold',
  },
  textBottom: {
    color: colors.darkGreyColor,
  },
  rightWrap: {
    flex: 1,
    paddingLeft: 10,
  },
  textTime: {
    color: colors.darkGreyColor,
    fontSize: 12,
  }
});
