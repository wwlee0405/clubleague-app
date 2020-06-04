import React from "react";
import { StyleSheet, Text, View, ScrollView , TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import ClubPlayers from "../../components/contents/ClubPlayers";


export default ({ onPress, navigation }) => {
  return (
    <View style={styles.container}>

      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <ClubPlayers
          onPress={() => navigation.navigate('Profile')}
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
