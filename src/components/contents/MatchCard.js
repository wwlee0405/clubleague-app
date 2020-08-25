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
          <View>
            <Text style={styles.sportText}>Soccer</Text>
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



      </TouchableOpacity>


      <View style={styles.bodyWrap}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollWrap}
        >
          <View style={styles.colorBoxWrap}>
            <View style={[styles.colorBoxTextWrap, { backgroundColor: colors.redColor, marginLeft: 5 }]}>
              <Feather
                name="calendar"
                color={colors.white}
                size={22}
                style={styles.colorBoximg}
              />
              <Text style={styles.colorBoxText}>Jul 20</Text>
            </View>
            <View style={[styles.colorBoxTextWrap, { backgroundColor: colors.blueColor, marginLeft: 5 }]}>
              <MaterialCommunityIcons
                name="stadium-variant"
                color={colors.white}
                size={22}
                style={styles.colorBoximg}
              />
              <Text style={styles.colorBoxText}>Buenos Aires</Text>
            </View>
            <View style={[styles.colorBoxTextWrap, { backgroundColor: colors.yellowGreen, marginLeft: 5 }]}>
              <Feather
                name="clock"
                color={colors.white}
                size={22}
                style={styles.colorBoximg}
              />
              <Text style={styles.colorBoxText}>10:00~14:00</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottmWrap}>
        <Text note style={{ color: colors.darkGreyColor, fontSize: 12 }}>PM 5 : 20, Jan 15, 2020</Text>
      </View>

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
    backgroundColor: colors.ghostWhite,
  },
  sportText: {
    paddingTop: 5,
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.seaGreen,
  },
  bodyMachClubScrollWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 15,
    paddingEnd: 15,
    paddingTop: 5,
  },
  clubImg: {
    width: 50,
    height: 50,
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
  },
  remainText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    fontWeight: 'bold',
    color: colors.redColor,
  },
  scrollWrap: {
    alignItems: 'center',
    paddingStart: 10,
    paddingEnd: 10,
    backgroundColor: colors.ghostWhite,
  },
  colorBoxWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  colorBoxTextWrap: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: 25,
    borderRadius: 5,
  },
  colorBoximg: {
    paddingLeft: 5,
  },
  colorBoxSport: {
    paddingLeft: 10,
    paddingRight: 10,
    color: colors.white,
  },
  colorBoxText: {
    paddingLeft: 5,
    paddingRight: 8,
    color: colors.white,
  },
  bottmWrap: {
    flex: 1,
    paddingLeft: 15,
  },
});
