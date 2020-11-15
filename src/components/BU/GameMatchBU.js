import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput , TouchableOpacity, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';

import SetSportForm from "../../components/form/SetSportForm";
import SetDateForm from "../../components/form/SetDateForm";
import SetClubForm from "../../components/form/SetClubForm";
import clubplayers from "../../data/clubplayers";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Writing')}
        title="Submit"
      >
        <Feather name="check" size={25} style={{ paddingRight: 10 }} />
      </TouchableOpacity>
    ),
  });

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
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
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
