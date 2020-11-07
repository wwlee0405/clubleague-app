import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import styled from "styled-components"
import colors from '../../../colors';

const Container = styled.View`
  flex: 1;
  border-radius: 15px;
  background-color: ${(props) => props.theme.white};
  margin-vertical: 3px;
`;
const NoticeWrap = styled.View`
  flex: 5;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 5px;
`;
const LeftWrap = styled.View`
  flex: 1;
  align-items: center;
  padding-left: 10px;
`;
const BodyWrap = styled.View`
  flex: 3;
  padding-left: 10px;
`;
const UsernameText = styled.Text`
  font-weight: bold;
`;
const NotificationText = styled.Text`
  color: ${(props) => props.theme.darkGreyColor};
`;
const RightWrap = styled.View`
  flex: 1;
  padding-left: 10px;
`;
const TimeText = styled.Text`
  color: ${(props) => props.theme.darkGreyColor};
  font-size: 12px;
`;

const NotificationCard = ({ onPress, noticeOnPress, username, text, time }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <NoticeWrap>

          <LeftWrap>
            <TouchableOpacity onPress={noticeOnPress}>
              <Image
                source={require('../../data/ImgTest/cccc.jpg')}
                style={{ width: 60, height: 60, borderRadius: 100 }}
              />
            </TouchableOpacity>
          </LeftWrap>

          <BodyWrap>
            <UsernameText>{username}</UsernameText>
            <NotificationText>{text}</NotificationText>
          </BodyWrap>

          <RightWrap>
            <TimeText>{time}</TimeText>
          </RightWrap>

        </NoticeWrap>
      </TouchableOpacity>
    </Container>
  );
};

export default NotificationCard;
