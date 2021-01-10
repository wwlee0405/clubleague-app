import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import colors from "../../../colors";

const SearchClubCard = ({ onPress, navigation, id, clubName, clubInfo, sports, clubArea, members, clubLeader }) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>

        <View style={styles.emblemWrap}>
          <Image
            source={require('../../data/ImgTest/1ars.jpg')}
            style={styles.emblem}
          />
        </View>

        <View style={styles.clubInfoWrap}>
          <View>
            <Text style={styles.clubNameText}>{clubName}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>{clubArea}</Text>
          </View>
          <View style={styles.clubInfoTextWrap}>
            <Text style={styles.clubInfoTopTextLeft}>{sports}</Text>
            <Text style={styles.clubInfoTopTextRight}>{clubInfo}</Text>
          </View>
          <View style={styles.clubInfoTextWrap}>
            <Text style={styles.clubInfoBottomTextLeft}>Members  <Text>{members}</Text></Text>
            <Text style={styles.clubInfoBottomTextRight}>Leader  <Text>{clubLeader}</Text></Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  </View>
);

SearchClubCard.propTypes = {
  id: PropTypes.string.isRequired,
  clubName: PropTypes.string,
  clubInfo: PropTypes.string,
  sports: PropTypes.string,
  members: PropTypes.string,
  clubLeader: PropTypes.string,
};

export default SearchClubCard;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: colors.white,
    marginVertical: 5,
    paddingVertical: 8
  },
  clubInfoWrap: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  emblemWrap: {
    paddingLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emblem: {
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  clubInfoWrap: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
  clubNameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  clubInfoTextWrap: {
    flexDirection: 'row',
  },
  clubInfoTopTextLeft: {
    fontSize: 12,
    color: colors.darkGreyColor,
  },
  clubInfoTopTextRight: {
    paddingLeft: 20,
    fontSize: 12,
    color: colors.darkGreyColor,
  },
  clubInfoBottomTextLeft: {
    fontSize: 12,
    color: colors.darkGreyColor,
  },
  clubInfoBottomTextRight: {
    fontSize: 12,
    paddingLeft: 20,
    color: colors.darkGreyColor,
  },
});
