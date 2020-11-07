import React, { Component } from 'react';
import { View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import colors from '../../../colors';

import MatchListItem from "../../components/items/MatchListItem";
import clubplayers from "../../data/clubplayers";


export default ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.clBackgroundColor }}>
      <ScrollView>
        <FlatList
          data={clubplayers}
          renderItem={({item}) =>
            <MatchListItem
              onPress={() => navigation.navigate('FeedDetails')}
              avatar={item.avatar}
              user={item.user}
              area={item.area}
            />
          }
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </View>
  );
};
