import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';

import FeedPost from "../../components/contents/FeedPost";


export default ({
    navigation,
    onPress,
    username,
    location,
    bodyImg,
    bodyText,
    matchDetailsOnPress,
    hits
  }) => {
  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <FeedPost
        onPress={() => navigation.navigate('Profile')}
        username="Lionel Messi"
        location="Buenos Aires, Argentina"
        bodyText="캄프누에서 뛸 매치상대구합니다."
        matchDetailsOnPress={() => navigation.navigate('Details')}
        entryNavigationOnPress={() => navigation.navigate('Entry')}
        hits="150"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
