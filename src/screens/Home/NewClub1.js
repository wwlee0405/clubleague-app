import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { Feather } from '@expo/vector-icons';
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import colors from '../../../colors';
import SetSportInput from "../../components/form/SetSportInput";

const CREATE_TEAM = gql`
  mutation createTeam(
    $teamName: String!
    $teamArea: String
    $teamInfo: String
  ) {
    createTeam(
      teamName: $teamName
      teamArea: $teamArea
      teamInfo: $teamInfo
    )
  }
`;

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        title="Submit"
      >
        <Feather name="check" size={25} style={{ paddingRight: 10 }} />
      </TouchableOpacity>
    )
  });
  constructor() {
    super();
    this.state={
      clubName: "",

    }
  }
  onSubmit = () => {
    console.warn(this.state)
  };

  render() {

    return (
      <View style={styles.container}>

        <SetSportInput />

        <View style={styles.inputSectionWrap}>
          <TextInput
            style={styles.inputSection}
            placeholder="Input Club Name"
            onChangeText={(text) => {this.setState({clubName: text})}}
          />
        </View>

        <View style={styles.inputSectionWrap}>
          <TextInput style={styles.inputSection} placeholder="Input Club Hometown" />
        </View>

        <View style={styles.imgSectionWrap}>
          <TouchableOpacity
            onPress={() => alert("edit img")}
          >
            <View style={styles.imgSection}>
              <Feather name="camera" size={40} style={{ paddingBottom: 5, color: colors.grey03 }} />
              <Text style={{ color: colors.grey03 }}>사진추가</Text>
            </View>
            <Image
              source={require('../../data/ImgTest/cccc.jpg')}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.notice}>You can change club name and picture after you create it.</Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSectionWrap: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 20,
  },
  inputSection: {
    fontSize: 20,
    textAlign: 'center',
  },
  imgSectionWrap: {
    paddingBottom: 10
  },
  imgSection: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: colors.grey01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: colors.lightGreyColor,
  },
  notice: {
    fontSize: 13,
    color: colors.grey03,
  },
});
