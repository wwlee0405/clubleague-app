import React from "react";
import { StyleSheet, Text, TextInput, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';
import TextInputField from "../../components/form/TextInputField";


export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
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
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.imgWrap}>
            <TouchableOpacity
              onPress={() => alert("edit img")}
            >
              <Image
                source={require('../../data/ImgTest/dddd.jpg')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.textWrap}>
            <TextInputField labelText="Username" placeholder="Username" />
            <TextInputField labelText="Name" placeholder="Name" />
            <TextInputField labelText="Area" placeholder="Area" />
            <TextInputField labelText="Position" placeholder="Position" />
            <TextInputField labelText="Mainclub" placeholder="Mainclub" />
          </View>

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
  imgWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  textWrap: {
    padding: 20,
  }
});
