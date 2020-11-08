import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, TouchableOpacity, Modal, Alert } from "react-native";
import styled from "styled-components"
import colors from '../../../colors';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding-vertical: 5px;
  margin-vertical: 3px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.white};
`;
const LeftWrap = styled.View`
  align-items: center;
  justify-content: center;
  padding-vertical: 10px;
  width: 100px;
`;
const LabelText = styled.Text`
  font-size: 20px;
  color: ${props =>
    props.homeAwayColor ? props.homeAwayColor : props.theme.yellow};
`;
const RightWrap = styled.View`
  justify-content: center;
`;
const PropertyText = styled.Text`
  font-size: 20px;
  color: ${props =>
    props.propertyColor ? props.propertyColor : props.theme.yellow};
`;

export default class SetClubForm extends React.Component {
  render() {
    const { onPress, homeAway, homeAwayColor, propertyColor } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Container>
          <LeftWrap>
            <LabelText homeAwayColor={homeAwayColor}>{homeAway}</LabelText>
          </LeftWrap>
          <RightWrap>
            <PropertyText propertyColor={propertyColor}>Select your club</PropertyText>
          </RightWrap>
        </Container>
      </TouchableOpacity>
    );
  }
}
