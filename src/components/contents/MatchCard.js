import React, { Component } from "react";
import styled from "styled-components"
import { PropTypes } from "prop-types";
import { StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
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
const ProfileWrap = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px 15px;
`;
const ProfileImgBtn = styled.View`
  padding-right: 10px;
`;
const ProfileTextWrap = styled.View`
  justify-content: center;
`;
const ProfileUserNameText = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;
const ProfileUserAreaText = styled.Text`
  font-size: 13px;
`;
const BodyWrap = styled.View`
  background-color: ${(props) => props.theme.white};
`;
const SportWrap = styled.View`
  flex: 1;
  flex-direction: row;
`;
const SportText = styled.Text`
  padding-top: 5px;
  padding-left: 15px;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.seaGreen};
`;
const TypeWrap = styled.View`
  margin-top: 5px;
  margin-left: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.yellow};
`;
const TypeText = styled.Text`
  padding-horizontal: 3px;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.yellow};
`;
const BodyGameWrap = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-top: 5px;
  padding-horizontal: 15px;
`;
const GameText = styled.Text`
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  font-size: 13px;
  color: ${(props) => props.theme.darkGreyColor};
`;
const RemainText = styled.Text`
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => props.theme.redColor};
`;
const GameSchedhuleWrap = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.white};
`;
const GameAreaWrap = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 15px;
`;

const MatchCard = ({
    onPress,
    profileOnPress,
    avatar,
    username,
    area,
  }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        {/*Auther info*/}
        <ProfileWrap>
          <TouchableOpacity onPress={profileOnPress}>
            <ProfileImgBtn>
              <Image
                source={avatar}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
            </ProfileImgBtn>
          </TouchableOpacity>
          <ProfileTextWrap>
            <ProfileUserNameText>{username}</ProfileUserNameText>
            <ProfileUserAreaText>{area}</ProfileUserAreaText>
          </ProfileTextWrap>
        </ProfileWrap>
        {/*Game content info*/}
        <BodyWrap>
          <SportWrap>
            <SportText>Soccer</SportText>
            <TypeWrap>
              <TypeText>Match</TypeText>
            </TypeWrap>
          </SportWrap>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingStart: 15, paddingEnd: 15, paddingTop: 10 }}
          >
            <View style={{ paddingRight: 10 }}>
              <Image
                source={require('../../data/ImgTest/1ars.jpg')}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
            </View>
            <View style={{ paddingRight: 10 }}>
              <Image
                source={require('../../data/ImgTest/2bar.jpg')}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
            </View>
            <View style={{ paddingRight: 10 }}>
              <Image
                source={require('../../data/ImgTest/2bar.jpg')}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
            </View>
            <View style={{ paddingRight: 10 }}>
              <Image
                source={require('../../data/ImgTest/2bar.jpg')}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
            </View>

          </ScrollView>
          <BodyGameWrap>
            <GameText><Text>4</Text> TeamGame</GameText>
            <RemainText><Text>1</Text> Remain</RemainText>
          </BodyGameWrap>
        </BodyWrap>
        {/*Game schedule and area info*/}
        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <GameSchedhuleWrap>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Jul 20</Text>
            </View>
            <Text style={{ marginLeft: 8 }}>|</Text>
            <View>
              <Text style={{ marginLeft: 8, fontSize: 15 }}>10:00~14:00</Text>
            </View>
          </GameSchedhuleWrap>
          <GameAreaWrap>
            <Feather name="map-pin" color={colors.darkGreyColor} size={18} />
            <Text style={{ color: colors.darkGreyColor, fontSize: 13 }}>Buenos Aires</Text>
          </GameAreaWrap>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default MatchCard;
