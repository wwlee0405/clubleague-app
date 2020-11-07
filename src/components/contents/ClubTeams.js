import React from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components"
import colors from '../../../colors';

const Touchable = styled.TouchableOpacity``;
const ClubTeam = styled.View`
  align-items: center;
`;
const ClubName = styled.Text`
  font-weight: bold;
  width: 80px;
  overflow: hidden;
`;
const ClubTeams = ({ onPress, emblem, clubName }) => {
  return (
    <Touchable onPress={onPress}>
      <ClubTeam>
        <Image
          style={{ marginHorizontal: 5, width: 85, height: 85, borderRadius: 100 }}
          source={{ uri: emblem }}
        />
        <ClubName numberOfLines={1}>{clubName}</ClubName>
      </ClubTeam>
    </Touchable>
  );
};

ClubTeams.propTypes = {
  id: PropTypes.string.isRequired,
  clubName: PropTypes.string.isRequired,
};

export default ClubTeams;
