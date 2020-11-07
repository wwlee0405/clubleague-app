import React, { Component } from 'react';
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import colors from '../../../colors';

const View = styled.View`
  flex: 1;
  background-color: ${props => props.theme.clBackgroundColor};
  padding-top: 10px;
`;
const Touchable = styled.TouchableOpacity``;
const Btn = styled.View`
  height: 50px;
  justify-content: center;
`;
const BtnText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 20px;
`;

export default ({ navigation }) => {
  return (
    <View>
      <BtnText>가입 신청받기</BtnText>
      <BtnText>가입 질문하기</BtnText>
    </View>
  );
};
