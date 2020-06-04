import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../../colors';

const SearchClubCard = ({ onPress, teamName, teamInfo, sports, teamArea, members, teamOwner }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.clubProfileWrap}>

          <View style={styles.clubProfileImgWrap}>
            <Image
              source={require('../../data/ImgTest/1ars.jpg')}
              style={styles.clubProfileImg}
            />
          </View>

          <View style={styles.clubProfileTextWrap}>
            <View>
              <Text style={styles.clubNameText}>{teamName}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 12 }}>{teamInfo}</Text>
            </View>
            <View style={styles.clubProfileTeamInfoTextWrap}>
              <Text style={styles.clubProfileTopInfoTextLeft}>{sports}</Text>
              <Text style={styles.clubProfileTopInfoTextRight}>{teamArea}</Text>
            </View>
            <View style={styles.clubProfileTeamInfoTextWrap}>
              <Text style={styles.clubProfileBottomInfoTextLeft}>Members  <Text>{members}</Text></Text>
              <Text style={styles.clubProfileBottomInfoTextRight}>Leader  <Text>{teamOwner}</Text></Text>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchClubCard;



const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 20,
    backgroundColor: colors.white,
    marginTop: 5,
    marginBottom: 5,
  },
  clubProfileWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  clubProfileImgWrap: {
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clubProfileImg: {
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  clubProfileTextWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  clubNameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  clubProfileTeamInfoTextWrap: {
    flexDirection: 'row',
  },
  clubProfileTopInfoTextLeft: {
    fontSize: 12,
    color: colors.grey03,
  },
  clubProfileTopInfoTextRight: {
    paddingLeft: 20,
    fontSize: 12,
    color: colors.grey03,
  },
  clubProfileBottomInfoTextLeft: {
    fontSize: 12,
    color: colors.grey03,
  },
  clubProfileBottomInfoTextRight: {
    fontSize: 12,
    paddingLeft: 20,
    color: colors.grey03,
  },
});
