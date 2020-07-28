import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import colors from '../../../colors';

const ClubHome = ({
    onPress,
    clubImg,
    teamName,
    sports,
    members,
    teamOwner,
    teamArea,
    joinOnPress
  }) => {
  return (
    <View>
      <View>
        <View style={styles.clubProfileWrap}>
          <TouchableOpacity
            style={styles.clubProfileImgButton}
            onPress={onPress}
          >
            <Image
              source={require('../../data/ImgTest/2bar.jpg')}
              style={styles.clubProfileImg}
            />
          </TouchableOpacity>
          <View style={styles.clubProfileTextWrap}>
            <View>
              <Text style={styles.clubNameText}>{teamName}</Text>
            </View>
            <Text>{sports}</Text>
            <View style={styles.clubProfileTeamInfoTextWrap}>
              <Text style={styles.clubProfileTopInfoTextLeft}>Members <Text>{members}</Text></Text>
              <Text style={styles.clubProfileTopInfoTextRight}>Leader <Text>{teamOwner}</Text></Text>
            </View>
            <View style={styles.clubProfileTeamInfoTextWrap}>
              <Text style={styles.clubProfileBottomInfoTextLeft}>{teamArea}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flex: 2, flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ flex: 1, height: 50, backgroundColor: colors.yellowGreen }}
          onPress={joinOnPress}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, color: colors.white }}>Join this Club</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, height: 50, backgroundColor: colors.blueColor }}
          onPress={() => alert("ask the match!")}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, color: colors.white }}>Ask the match</Text>
          </View>
        </TouchableOpacity>
      </View>



    </View>
  );
};

ClubHome.propTypes = {
  id: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  sports: PropTypes.string,
  members: PropTypes.string,
  teamOwner: PropTypes.string,
  teamArea: PropTypes.string,
};

export default ClubHome;

const styles = StyleSheet.create({
  clubProfileWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: colors.lightGreyColor,
  },
  clubProfileImgButton: {
    paddingRight: 15,
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
    fontSize: 20,
  },
  clubProfileTeamInfoTextWrap: {
    flexDirection: 'row',
  },
  clubProfileTopInfoTextLeft: {
    fontSize: 12,
    color: colors.darkGreyColor,
  },
  clubProfileTopInfoTextRight: {
    fontSize: 12,
    paddingLeft: 20,
    color: colors.darkGreyColor,
  },
  clubProfileBottomInfoTextLeft: {
    fontSize: 14,
    color: colors.darkGreyColor,
  },
});
