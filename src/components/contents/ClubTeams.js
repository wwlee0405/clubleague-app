import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import colors from '../../../colors';

const ClubTeams = ({ onPress, teamName }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.clubTeamsWrap}>
        <Image
          style={styles.clubImg}
          source={require('../../data/ImgTest/2bar.jpg')}
        />
        <Text style={styles.clubName}>{teamName}</Text>
      </View>
    </TouchableOpacity>
  );
};

ClubTeams.propTypes = {
  id: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
};

export default ClubTeams;

const styles = StyleSheet.create({
  clubTeamsWrap: {
    alignItems: 'center',
  },
  clubImg: {
    marginHorizontal: 5,
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  clubName: {
    fontWeight: 'bold',
  },
});
