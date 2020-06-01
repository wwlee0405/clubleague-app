import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

class ProfileScreen extends React.Component {

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.contantContainer}>

            <View style={styles.topWrap}>

              <View style={styles.imgWrap}>
                <Image
                  source={require('../../data/ImgTest/dddd.jpg')}
                  style={styles.img}
                />
              </View>

              <View style={styles.textWrap}>
                <View style={styles.textWrapPadding}>
                  <View>
                    <Text style={styles.nameTag}>Username</Text>
                    <Text style={styles.property}>wwlee0405</Text>
                  </View>
                  <View>
                    <Text style={styles.nameTag}>Name</Text>
                    <Text style={styles.property}>Lionel Messi</Text>
                  </View>
                  <View>
                    <Text style={styles.nameTag}>Area</Text>
                    <Text style={styles.property}>Barcelona, Spain</Text>
                  </View>
                  <View>
                    <Text style={styles.nameTag}>Position</Text>
                    <Text style={styles.property}>FW</Text>
                  </View>
                  <View>
                    <Text style={styles.nameTag}>Mainclub</Text>
                    <Text style={styles.property}>FC Barcelona</Text>
                  </View>
                </View>
              </View>

            </View>

            <View style={styles.buttonWrap}>
              <TouchableOpacity
                style={styles.editProfileButton}
                onPress={() => navigation.navigate('EditProfile')}
              >
                <Text style={styles.editProfileButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
  contantContainer: {
    paddingTop: 10,
  },
  topWrap: {
    flexDirection: 'row',
  },
  imgWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textWrap: {
    flex: 1,
  },
  textWrapPadding: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  nameTag: {
    fontSize: 10,
    color: colors.darkGreyColor,
  },
  property: {
    fontSize: 15,
    color: colors.blackColor,
  },
  buttonWrap: {
    paddingTop: 20,
  },
  editProfileButton: {
    flex: 1,
    marginRight: 25,
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: colors.emerald,
    backgroundColor: colors.clBackgroundColor,
    borderRadius: 8,
  },
  editProfileButtonText: {
    fontWeight: 'bold',
    color: colors.emerald,
  },
});
