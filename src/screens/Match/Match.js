import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import SearchInput from "../../components/form/SearchInput";
import MatchCard from "../../components/contents/MatchCard";


export default ({ onPress, navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, paddingTop: 250, paddingBottom: 300 }}>
          <SearchInput placeholderText="종목명, 도시명, 클럽명" />
          <TouchableOpacity
            onPress={() => alert("Detail Search")}
            style={{ flex: 1, alignItems: 'center' }}
          >
            <Text>Detial Search</Text>
          </TouchableOpacity>
        </View>


        <MatchCard
          username="Son"
          area="Seoul, Korea"
          bodyText="한번 붙자!! 05/17 매칭 초청합니다. 팀명:F.C. Barcelona 유니폼:줄무늬, 매너:최고, 장소:캄프누"
          onPress={() => navigation.navigate('FeedDetails')}
          profileOnPress={() => navigation.navigate('Profile')}
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
