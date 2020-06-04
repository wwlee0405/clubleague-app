import React from "react";
import { StyleSheet, Text, View, ScrollView , TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import ClubSchedule from "../../components/contents/ClubSchedule";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>

      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >

        <ClubSchedule />

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
