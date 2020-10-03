import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

const MatchCard = ({
    onPress,
    profileOnPress,
    avatar,
    username,
    area,
  }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.profileWrap}>
          <TouchableOpacity
            style={styles.profileImgButton}
            onPress={profileOnPress}
          >
            <Image
              source={avatar}
              style={styles.profileImg}
            />
          </TouchableOpacity>
          <View style={styles.profileTextWrap}>
            <Text style={styles.profileUserTextTop}>{username}</Text>
            <Text style={styles.profileUserTextBottom}>{area}</Text>
          </View>
        </View>


        <View style={styles.bodyWrap}>
          <View style={styles.sportWrap}>
            <Text style={styles.sportText}>Soccer</Text>
            <View style={styles.typeTextBox}>
              <Text style={styles.typeText}>Match</Text>
            </View>

          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bodyMachClubScrollWrap}
          >
            <View style={{ paddingRight: 10 }}>
              <Image
                source={require('../../data/ImgTest/1ars.jpg')}
                style={styles.clubImg}
              />
            </View>
            <View style={{ paddingRight: 10 }}>
              <Image
                source={require('../../data/ImgTest/2bar.jpg')}
                style={styles.clubImg}
              />
            </View>
            <View style={{ paddingRight: 10 }}>
              <Image
                source={require('../../data/ImgTest/2bar.jpg')}
                style={styles.clubImg}
              />
            </View>
            <View style={{ paddingRight: 10 }}>
              <Image
                source={require('../../data/ImgTest/2bar.jpg')}
                style={styles.clubImg}
              />
            </View>



          </ScrollView>
          <View style={styles.bodyGameWrap}>
            <Text style={styles.gameText}><Text>4</Text> TeamGame</Text>
            <Text style={styles.remainText}><Text>1</Text> Remain</Text>
          </View>

        </View>


        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <View style={styles.schedhuleBoxWrap}>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Jul 20</Text>
            </View>
            <Text style={{ marginLeft: 8 }}>|</Text>
            <View>
              <Text style={{ marginLeft: 8, fontSize: 15 }}>10:00~14:00</Text>
            </View>
          </View>

          <View style={styles.placeBoxWrap}>
            <Feather
              name="map-pin"
              color={colors.darkGreyColor}
              size={18}
            />
            <Text style={{ color: colors.darkGreyColor, fontSize: 13 }}>Buenos Aires</Text>
          </View>
        </View>

      </TouchableOpacity>


    </View>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 15,
    backgroundColor: colors.white,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  profileWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  profileImgButton: {
    paddingRight: 10,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  profileTextWrap: {
    justifyContent: 'center',
  },
  profileUserTextTop: {
    fontWeight: 'bold',
    fontSize: 13
  },
  profileUserTextBottom: {
    fontSize: 13
  },
  bodyWrap: {
    backgroundColor: colors.white,
  },
  sportWrap: {
    flex: 1,
    flexDirection: 'row'
  },
  sportText: {
    paddingTop: 5,
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.seaGreen,
  },
  typeTextBox: {
    marginTop: 5,
    marginLeft: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.yellow
  },
  typeText: {
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 3,
    paddingRight: 3,
    color: colors.yellow
  },
  bodyMachClubScrollWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 15,
    paddingEnd: 15,
    paddingTop: 10,
  },
  clubImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  bodyGameWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
    paddingHorizontal: 15,
  },
  gameText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    color: colors.darkGreyColor,
    fontSize: 13,
  },
  remainText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    fontWeight: 'bold',
    color: colors.redColor,
    fontSize: 13,
  },
  schedhuleBoxWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  placeBoxWrap: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
  },

});
