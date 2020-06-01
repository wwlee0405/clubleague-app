import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';

import FeedCardDetails from "../../components/contents/FeedCardDetails";


export default class FeedCardDetailsScreen extends React.Component {

  render() {
    const { navigation, onPress, profileImg, user, address, bodyImg, bodyText, matchDetailsOnPress, hits } = this.props;
    return (
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <FeedCardDetails
          onPress={() => navigation.navigate('Profile')}
          profileImg={require('../../data/ImgTest/dddd.jpg')}
          user="Lionel Messi"
          address="Buenos Aires, Argentina"
          bodyImg={require('../../data/ImgTest/bbbb.jpg')}
          bodyText="캄프누에서 뛸 매치상대구합니다."
          matchDetailsOnPress={() => navigation.navigate('Details')}
          entryNavigationOnPress={() => navigation.navigate('Entry')}
          hits="150"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
