import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components"
import colors from '../../../colors';

const View = styled.View`
`;
const Text = styled.Text`
`;
const Container = styled.View`
  flex: 1;
  border-radius: 15px;
  background-color: ${(props) => props.theme.white};
  padding-bottom: 10px;
  margin-vertical: 5px;
`;
const EmblemWrap = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px 15px;
`;
const EmblemImgBtn = styled.View`
  padding-right: 10px;
`;
const ClubTextWrap = styled.View`
  justify-content: center;
`;
const ClubNameText = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;
const ClubAreaText = styled.Text`
  font-size: 13px;
`;
const BodyWrap = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${(props) => props.theme.white};
`;
const BodyLeftWrap = styled.View`
  background-color: ${(props) => props.theme.white};
  width: 110px;
  padding-horizontal: 7px;
  align-items: center;
  justify-content: center;
`;
const MatchDateText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const MatchTimeText = styled.Text`
  color: ${(props) => props.theme.darkGreyColor};
`;
const MatchAreaText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => props.theme.seaGreen};
`;
const BodyRightWrap = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const MachClubWrap = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-start: 15px;
  padding-end: 15px;
  padding-top: 5px;
`;
const GameText = styled.Text`
  font-size: 13px;
  padding-vertical: 3px;
  color: ${(props) => props.theme.darkGreyColor};
`;

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
    <Container>
      <TouchableOpacity onPress={onPress}>
      {/*Club info*/}
        <EmblemWrap>
          <TouchableOpacity onPress={detailsOnPress}>
            <EmblemImgBtn>
              <Image
                source={emblem}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
            </EmblemImgBtn>
          </TouchableOpacity>
          <ClubTextWrap>
            <ClubNameText>{clubName}</ClubNameText>
            <ClubAreaText>{sport}</ClubAreaText>
          </ClubTextWrap>
        </EmblemWrap>
        {/*Game content info*/}
        <BodyWrap>
          <BodyLeftWrap>
            <MatchDateText>{date}</MatchDateText>
            <MatchTimeText>{time}</MatchTimeText>
            <MatchAreaText numberOfLines={1}>{matchArea}</MatchAreaText>
          </BodyLeftWrap>
          <BodyRightWrap>
            <MachClubWrap>
              <View style={{ paddingRight: 10 }}>
                <Image
                  source={require('../../data/ImgTest/1ars.jpg')}
                  style={{ width: 50, height: 50, borderRadius: 100 }}
                />
              </View>
              <View style={{ paddingRight: 10 }}>
                <Image
                  source={require('../../data/ImgTest/2bar.jpg')}
                  style={{ width: 50, height: 50, borderRadius: 100 }}
                />

              </View>
              <View style={{ paddingRight: 10 }}>
                <Image
                  source={require('../../data/ImgTest/2bar.jpg')}
                  style={{ width: 50, height: 50, borderRadius: 100 }}
                />
              </View>
              <View style={{ paddingRight: 10 }}>
                <Image
                  source={require('../../data/ImgTest/2bar.jpg')}
                  style={{ width: 50, height: 50, borderRadius: 100 }}
                />
              </View>

            </MachClubWrap>
            <View>
              <GameText><Text>{clubGame}</Text> TeamGames</GameText>
            </View>
          </BodyRightWrap>
        </BodyWrap>
      </TouchableOpacity>
    </Container>
  );
};

export default ScheduleCard;
