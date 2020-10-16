import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import colors from '../../../colors';

const ClubTeams = ({ onPress, emblem, clubName }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.clubTeamsWrap}>
        <Image
          style={styles.emblem}
          source={{ uri: emblem }}
        />
        <Text style={styles.clubName} numberOfLines={1}>{clubName}</Text>
      </View>
    </TouchableOpacity>
  );
};

ClubTeams.propTypes = {
  id: PropTypes.string.isRequired,
  clubName: PropTypes.string.isRequired,

};

export default ClubTeams;

const styles = StyleSheet.create({
  clubTeamsWrap: {
    alignItems: 'center',
  },
  emblem: {
    marginHorizontal: 5,
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  clubName: {
    fontWeight: 'bold',
    width: 80,
    overflow: 'hidden',
  },
});
