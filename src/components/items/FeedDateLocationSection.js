import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import styled from "styled-components";
import colors from '../../../colors';

const Container = styled.View`
  flex-direction: row;
  padding: 10px 15px;
`;
const TextWrap = styled.View`
  padding-left: 10px;
`;
const TopText = styled.Text`
  font-size: 15px;
	font-weight: bold;
`;
const BottomText = styled.Text`
  color: ${(props) => props.theme.darkGreyColor};
`;

const FeedDateLocationSection = ({ icon, topText, bottomText }) => {
  return (
    <Container>
      <Feather name={icon} size={20} color={colors.emerald} />
      <TextWrap>
        <TopText>{topText}</TopText>
        <BottomText>{bottomText}</BottomText>
      </TextWrap>
    </Container>
  );
};

FeedDateLocationSection.propTypes = {
  icon: PropTypes.string.isRequired,
  topText: PropTypes.string,
  bottomText: PropTypes.string,
};

export default FeedDateLocationSection;
