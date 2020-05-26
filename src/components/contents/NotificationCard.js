import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../../colors';


export default class NotificationCard extends React.Component {

  render() {
    const { onPress, noticeOnPress, profileImg, user, text, time } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.noticeWrap}>

          <View style={styles.leftWrap}>
            <TouchableOpacity onPress={noticeOnPress}>
              <Image
                source={profileImg}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.bodyWrap}>
            <Text style={styles.textTop}>{user}</Text>
            <Text style={styles.textBottom}>{text}</Text>
          </View>

          <View style={styles.rightWrap}>
            <Text style={styles.textTime}>{time}</Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  noticeWrap: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  leftWrap: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
  },
  img: {
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
