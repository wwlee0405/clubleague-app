import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import styled from "styled-components"
import colors from '../../../colors';

const Container = styled.View`
  flex: 5;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.lightGreyColor};
`;
const LeftWrap = styled.View`
  flex: 1;
  align-items: center;
  padding-vertical: 5px;
`;
const ScheduleLeftTop = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const ScheduleLeftBottom = styled.Text`
  font-size: 12px;
`;
const RightWrap = styled.View`
  flex: 4;
  justify-content: center;
`;
const ScheduleRightTop = styled.Text`
  font-size: 16px;
`;
const ScheduleTime = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.emerald};
`;
const ScheduleRightBottom = styled.Text`
  font-size: 14px;
  border-bottom-color: ${(props) => props.theme.darkGreyColor};
`;

export default ({
  day,
  week,
  title,
  time,
  area
}) => (
  <Container>
    <LeftWrap>
      <ScheduleLeftTop>{day}</ScheduleLeftTop>
      <ScheduleLeftBottom>{week}</ScheduleLeftBottom>
    </LeftWrap>
    <RightWrap>
      <ScheduleRightTop>{title}</ScheduleRightTop>
      <ScheduleTime>{time}</ScheduleTime>
      <ScheduleRightBottom>{area}</ScheduleRightBottom>
    </RightWrap>
  </Container>
);
