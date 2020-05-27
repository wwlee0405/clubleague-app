import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';
import SetSportInput from "../../components/form/SetSportInput";

class NewClub extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          title="submit"
        >
          <Feather name="check" size={25} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>

        <SetSportInput />

        <View style={styles.inputSectionWrap}>
          <TextInput style={styles.inputSection} placeholder="Input Club Name" />
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

export default NewClub;

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
