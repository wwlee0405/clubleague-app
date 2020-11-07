import React from "react";
import styled from "styled-components"
import { StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import colors from '../../../colors';

const View = styled.View`
`;
const Text = styled.Text`
`;
const ClubProfileWrap = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.lightGreyColor};
`;
const Touchable = styled.TouchableOpacity``;
const ClubProfileImgBtn = styled.View`
  padding-right: 15px;
`;
const ClubProfileTextWrap = styled.View`
  flex: 1;
  justify-content: center;
`;
const ClubNameText = styled.Text`
font-weight: bold;
font-size: 20px;
`;
const ClubProfileTeamInfoTextWrap = styled.View`
  flex-direction: row;
`;
const ClubProfileTopInfoTextLeft = styled.Text`
font-size: 12px;
color: ${(props) => props.theme.darkGreyColor};
`;
const ClubProfileTopInfoTextRight = styled.Text`
font-size: 12px;
padding-left: 20px;
color: ${(props) => props.theme.darkGreyColor};
`;
const ClubProfileBottomInfoTextLeft = styled.Text`
font-size: 14px;
color: ${(props) => props.theme.darkGreyColor};
`;

const ClubHome = ({
    onPress,
    emblem,
    clubName,
    sports,
    members,
    clubLeader,
    clubArea,
    joinOnPress
  }) => {
  return (
    <View>
      <View>
        <ClubProfileWrap>
          <Touchable onPress={onPress}>
            <ClubProfileImgBtn>
              <Image
                source={require('../../data/ImgTest/2bar.jpg')}
                style={{ width: 85, height: 85, borderRadius: 100 }}
              />
            </ClubProfileImgBtn>
          </Touchable>
          <ClubProfileTextWrap>
            <ClubNameText>{clubName}</ClubNameText>
            <Text>{sports}</Text>
            <ClubProfileTeamInfoTextWrap>
              <ClubProfileTopInfoTextLeft>Members <Text>{members}</Text></ClubProfileTopInfoTextLeft>
              <ClubProfileTopInfoTextRight>Leader <Text>{clubLeader}</Text></ClubProfileTopInfoTextRight>
            </ClubProfileTeamInfoTextWrap>
            <ClubProfileTeamInfoTextWrap>
              <ClubProfileBottomInfoTextLeft>{clubArea}</ClubProfileBottomInfoTextLeft>
            </ClubProfileTeamInfoTextWrap>
          </ClubProfileTextWrap>
        </ClubProfileWrap>
      </View>

      <View style={{ flex: 2, flexDirection: 'row' }}>
        <Touchable
          onPress={joinOnPress}
          style={{ flex: 1, height: 50, backgroundColor: colors.yellowGreen }}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, color: colors.white }}>Join this Club</Text>
          </View>
        </Touchable>
        <Touchable
          onPress={() => alert("ask the match!")}
          style={{ flex: 1, height: 50, backgroundColor: colors.blueColor }}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, color: colors.white }}>Ask the match</Text>
          </View>
        </Touchable>
      </View>

    </View>
  );
};

ClubHome.propTypes = {
  id: PropTypes.string.isRequired,
  clubName: PropTypes.string.isRequired,
  sports: PropTypes.string,
  members: PropTypes.string,
  clubLeader: PropTypes.string,
  clubArea: PropTypes.string,
};

export default ClubHome;
