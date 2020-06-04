import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import colors from '../../../colors';
import ClubHome from "../../components/contents/ClubHome";

export default ({ navigation }) => {
  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <ClubHome
        onPress={() => navigation.navigate('Details')}
        teamName="Barcelona"
        sports="Soccer"
        members="15"
        teamOwner="Ernesto Valverde"
        teamArea="Barcelona, Spain"
      />



      <Text>Team Schedule</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
