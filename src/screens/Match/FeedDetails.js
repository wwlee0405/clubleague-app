import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, ScrollView, View, Animated, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';

import ScrollHeader from "../../components/contents/ScrollHeader";
import FeedPost from "../../components/contents/FeedPost";

const HEADER_HEIGHT = 60;

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
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT)
    const translateY = diffClamp.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, -HEADER_HEIGHT]
    });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Animated.View
        style={{
          transform: [{ translateY: translateY }],
          elevation: 4,
          zIndex: 100,
        }}
      >
        <ScrollHeader onPress={() => navigation.goBack()} username={"messi"} />
      </Animated.View>
      <Animated.ScrollView
        bouces={false}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } }
          }
        ])}
        style={{ paddingTop: HEADER_HEIGHT }}
      >
        <FeedPost
          onPress={() => navigation.navigate('Profile')}
          username="messi"
          area="Buenos Aires, Argentina"
          bodyText="캄프누에서 뛸 매치상대구합니다."
          matchDetailsOnPress={() => navigation.navigate('Details')}
          entryNavigationOnPress={() => navigation.navigate('Entry')}
          hits="150"
        />
        <FeedPost
          onPress={() => navigation.navigate('Profile')}
          username="messi"
          area="Buenos Aires, Argentina"
          bodyText="캄프누에서 뛸 매치상대구합니다."
          matchDetailsOnPress={() => navigation.navigate('Details')}
          entryNavigationOnPress={() => navigation.navigate('Entry')}
          hits="150"
        />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
