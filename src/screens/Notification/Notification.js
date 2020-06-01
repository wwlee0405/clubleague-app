import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import NotificationCard from "../../components/contents/NotificationCard";
import noticecard from "../../data/noticecard";

class Notification extends React.Component {

  renderNotificationCard() {
    const { onPress, noticeOnPress, navigation } = this.props;
    return noticecard.map((noticecard, index) => {
      return (
        <View key={`noticecard-${index}`}>
          <NotificationCard
            key={`noticecard-item-${index}`}
            onPress={() => navigation.navigate('FeedCardDetailsScreen')}
            noticeOnPress={() => navigation.navigate('Profile')}
            profileImg={noticecard.profileImg}
            user={noticecard.user}
            text={noticecard.text}
            time={noticecard.time}
          />
        </View>
      );
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          {this.renderNotificationCard()}
        </ScrollView>
      </View>
    );
  }
}

export default Notification;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: colors.clBackgroundColor,
  },
});
