import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import styled from "styled-components"
import colors from '../../../colors';

const Container = styled.View`
  flexDirection: row;
  padding-vertical: 10px;
`;
const ImgBtn = styled.View`
  align-items: center;
  padding-left: 15px;
`;
const BodyWrap = styled.View`
  padding-left: 10px;
`;
const ProfileWrap = styled.View`
  flex-direction: row;
`;
const UserText = styled.Text`
  font-weight: bold;
`;
const TimeText = styled.Text`
  padding-left: 10px;
  color: ${(props) => props.theme.darkGreyColor};
`;
const ReplyText = styled.Text`
  padding-right: 80px;
`;

const Reply = ({ onPress, avatar, username, text, time }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <ImgBtn>
          <Image
            source={avatar}
            style={{ width: 40, height: 40, borderRadius: 100 }}
          />
        </ImgBtn>
      </TouchableOpacity>
      <BodyWrap>
        <ProfileWrap>
          <UserText>{username}</UserText>
          <TimeText>AM 12:00</TimeText>
        </ProfileWrap>
        <ReplyText>ekmslgmslgmsssssssssssssssssssssssssssssssssssl</ReplyText>
      </BodyWrap>

    </Container>
  );
};


export default Reply;
