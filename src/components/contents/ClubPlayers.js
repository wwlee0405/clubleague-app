import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';
import PlayersListItem from "../items/PlayersListItem";

import clubplayers from "../../data/clubplayers";


const ClubPlayers = ({ onPress }) => {
  return (
    <View style={styles.clubPlayersSectionWrap}>
      <ScrollView>

        <View>
          <TouchableOpacity
            style={{ flex: 1, height: 70 }}
            onPress={() => alert("친구 초대하기")}
          >
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="user-plus" size={30} style={{ paddingLeft: 20, paddingRight: 20 }} />
              <Text>Invite as a member</Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={clubplayers}
          renderItem={({item}) =>
            <PlayersListItem
              onPress={onPress}
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


export default ClubPlayers;

const styles = StyleSheet.create({
  clubPlayersSectionWrap: {
   flex: 1,
  },
});
