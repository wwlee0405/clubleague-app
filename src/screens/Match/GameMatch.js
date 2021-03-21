import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput , TouchableOpacity, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';

import SetSportForm from "../../components/form/SetSportForm";
import SetDateForm from "../../components/form/SetDateForm";
import SetClubForm from "../../components/form/SetClubForm";
import clubplayers from "../../data/clubplayers";

function GameMatch({ navigation, route }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Match')} title="Submit">
          <Feather name="check" size={25} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    }, [navigation,]);
  });

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Post: {route.params?.post}</Text>
        <SetSportForm />
        <SetDateForm title="Date" />
        <SetDateForm title="Time" />
        <SetClubForm onPress={() => navigation.navigate('SetMatchList')} homeAway="Home" />
        <SetClubForm onPress={() => navigation.navigate('SetMatchList')} homeAway="Away" homeAwayColor={colors.darkGreyColor} propertyColor={colors.darkGreyColor} />
        <SetClubForm onPress={() => navigation.navigate('SetMatchList')} homeAway="Location" homeAwayColor={colors.blueColor} propertyColor={colors.blueColor} />
      </ScrollView>
    </View>
  );
}

export default GameMatch;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
