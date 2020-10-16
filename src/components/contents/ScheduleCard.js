import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import colors from '../../../colors';

const ScheduleCard = ({
    onPress,
    detailsOnPress,
    emblem,
    clubName,
    sport,
    date,
    time,
    matchArea,
    clubGame,
  }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.emblemWrap}>
          <TouchableOpacity
            style={styles.emblemButton}
            onPress={detailsOnPress}
          >
            <Image
              source={emblem}
              style={styles.emblem}
            />
          </TouchableOpacity>
          <View style={styles.clubInfoTextWrap}>
            <Text style={styles.clubInfoTextTop}>{clubName}</Text>
            <Text style={styles.clubInfoTextBottom}>{sport}</Text>
          </View>
        </View>


        <View style={styles.bodyWrap}>
          <View style={styles.bodyLeftWrap}>
            <Text style={styles.matchDate}>{date}</Text>
            <Text style={styles.matchTime}>{time}</Text>
            <Text style={styles.matchArea} numberOfLines={1}>{matchArea}</Text>
          </View>

          <View style={styles.bodyRightWrap}>
            <View style={styles.machClubWrap}>
              <View style={{ paddingRight: 10 }}>
                <Image
                  source={require('../../data/ImgTest/1ars.jpg')}
                  style={styles.matchClubEmblem}
                />
              </View>
              <View style={{ paddingRight: 10 }}>
                <Image
                  source={require('../../data/ImgTest/2bar.jpg')}
                  style={styles.matchClubEmblem}
                />

              </View>
              <View style={{ paddingRight: 10 }}>
                <Image
                  source={require('../../data/ImgTest/2bar.jpg')}
                  style={styles.matchClubEmblem}
                />
              </View>
              <View style={{ paddingRight: 10 }}>
                <Image
                  source={require('../../data/ImgTest/2bar.jpg')}
                  style={styles.matchClubEmblem}
                />
              </View>


            </View>

            <View>
              <Text style={styles.gameText}><Text>{clubGame}</Text> TeamGames</Text>
            </View>
          </View>

        </View>

      </TouchableOpacity>
    </View>
  );
};

export default ScheduleCard;


const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 15,
    backgroundColor: colors.white,
    paddingBottom: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  emblemWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  emblemButton: {
    paddingRight: 10,
  },
  emblem: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  clubInfoTextWrap: {
    justifyContent: 'center',
  },
  clubInfoTextTop: {
    fontWeight: 'bold',
    fontSize: 13
  },
  clubInfoTextBottom: {
    fontSize: 13
  },
  bodyWrap: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  bodyLeftWrap: {
    width: 110,
    paddingHorizontal: 7,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchDate: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  matchTime: {
    color: colors.darkGreyColor,
  },
  matchArea: {
    fontWeight: 'bold',
    fontSize: 13,
    color: colors.seaGreen,
  },
  bodyRightWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  machClubWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 15,
    paddingEnd: 15,
    paddingTop: 5,
  },
  matchClubEmblem: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  gameText: {
    color: colors.darkGreyColor,
    fontSize: 13,
    paddingBottom: 5,
  },
  bottmWrap: {
    flex: 1,
    paddingLeft: 15,
  },
});
