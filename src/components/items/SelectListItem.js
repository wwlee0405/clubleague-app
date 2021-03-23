import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import styled from "styled-components";
import colors from '../../../colors';

const Container = styled.View`
  flex-direction: row;
  padding-vertical: 5px;
  margin-vertical: 3px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.white};
`;
const LeftWrap = styled.View`
  align-items: center;
  padding-left: 10px;
`;
const RightWrap = styled.View`
  justify-content: center;
  padding-left: 20px;
`;
const RightTextTop = styled.Text`
	font-weight: bold;
`;
const RightTextBottom = styled.Text`
	color: ${(props) => props.theme.darkGreyColor};
	font-size: 14px;
`;

export default ({
  onPress,
  avatar,
  user,
  area
}) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <LeftWrap>
        <Image
          style={{ width: 60, height: 60, borderRadius: 100 }}
          source={{ uri: avatar }}
        />
      </LeftWrap>
      <RightWrap>
        <RightTextTop>{user}</RightTextTop>
        <RightTextBottom>Texas{area}</RightTextBottom>
      </RightWrap>
    </Container>
  </TouchableOpacity>
);
