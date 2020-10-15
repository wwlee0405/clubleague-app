import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from "react-native";

import PlayersListItem from "../../components/items/PlayersListItem";
import clubplayers from "../../data/clubplayers";
import colors from '../../../colors';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.btnText}>공동리더</Text>
        <FlatList
          data={clubplayers}
          renderItem={({item}) =>
            <PlayersListItem
              onPress={() => navigation.navigate('Profile')}
              profileImg={item.profileImg}
              user={item.user}
              address={item.address}
            />
          }
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: colors.clBackgroundColor,
   paddingTop: 10,
  },
  btnText: {
    fontSize: 15,
    paddingLeft: 20,
  }
});
