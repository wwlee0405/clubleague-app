import React from "react";
import { StyleSheet, Text, Button, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from '../../../colors';

const UserProfile = ({
  avatar,
  username,
  fullName,
  area,
  position,
  clubName,
  onPress
}) =>(
  <View style={styles.container}>
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.contantContainer}>

        <View style={styles.topWrap}>

          <View style={styles.avatarWrap}>
            <Image
              source={{ uri: avatar }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.textWrap}>
            <View style={styles.textWrapPadding}>
              <View>
                <Text style={styles.nameTag}>Username</Text>
                <Text style={styles.property}>{username}</Text>
              </View>
              <View>
                <Text style={styles.nameTag}>Name</Text>
                <Text style={styles.property}>{fullName}</Text>
              </View>
              <View>
                <Text style={styles.nameTag}>Area</Text>
                <Text style={styles.property}>{area}</Text>
              </View>
              <View>
                <Text style={styles.nameTag}>Position</Text>
                <Text style={styles.property}>{position}</Text>
              </View>
              <View>
                <Text style={styles.nameTag}>Mainclub</Text>
                <Text style={styles.property}>{clubName}</Text>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.buttonWrap}>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={onPress}
          >
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ flex: 1 }}>
        <Text style={{ margin: 10 }}>Joined Club</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => alert("move ClubDetails")}
            >
              <View style={{ alignItems: 'center', backgroundColor: "white", borderRadius: 10, padding: 10, margin: 5 }}>
                <Image
                  source={require('../../data/ImgTest/1ars.jpg')}
                  style={{ width: 90, height: 90, borderRadius: 100, margin: 5 }}
                />
                <Text style={{ width: 85, overflow: 'hidden' }} numberOfLines={1}>arsenal</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert("move ClubDetails")}
            >
              <View style={{ alignItems: 'center', backgroundColor: "white", borderRadius: 15, padding: 10, margin: 5 }}>
                <Image
                  source={require('../../data/ImgTest/2bar.jpg')}
                  style={{ width: 90, height: 90, borderRadius: 100, margin: 5 }}
                />
                <Text style={{ width: 85, overflow: 'hidden' }} numberOfLines={1}>fcBarcelona</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert("move ClubDetails")}
            >
              <View style={{ alignItems: 'center', backgroundColor: "white", borderRadius: 15, padding: 10, margin: 5 }}>
                <Image
                  source={require('../../data/ImgTest/2bar.jpg')}
                  style={{ width: 90, height: 90, borderRadius: 100, margin: 5 }}
                />
                <Text style={{ width: 85, overflow: 'hidden' }} numberOfLines={1}>fcBarcelonafnafabjfba</Text>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>


    </ScrollView>
  </View>
);

UserProfile.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
};
export default UserProfile;

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
  avatarWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  avatar: {
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
