import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { TouchableOpacity, DatePickerAndroid } from "react-native";
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
  color: ${(props) => props.theme.redColor};
`;
const RightWrap = styled.View`
  justify-content: center;
`;
const PropertyText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.redColor};
`;

export default class SetDateForm extends React.Component {

  state = {
    presetDate: new Date(2020, 4, 5),
    simpleDate: new Date(2020, 4, 5),
    spinnerDate: new Date(2020, 4, 5),
    calendarDate: new Date(2020, 4, 5),
    defaultDate: new Date(2020, 4, 5),
    simpleText: 'pick a date',
    spinnerText: 'pick a date',
  };

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Cannot open date picker '${stateKey}': `, message);
    }
  };

  render() {
    const { title, borderLine, labelColor } = this.props;
    const borderColor = borderLine || colors.redColor;
    const color = labelColor || colors.redColor;

    return (
      <TouchableOpacity
        onPress={this.showPicker.bind(this, 'spinner', {date: this.state.spinnerDate, mode: 'spinner' })}
      >
        <Container>
          <LeftWrap>
            <LabelText>{title}</LabelText>
          </LeftWrap>
          <RightWrap>
            <PropertyText>{this.state.spinnerText}</PropertyText>
          </RightWrap>
        </Container>
      </TouchableOpacity>
    );
  }
}

SetDateForm.propTypes = {
  title: PropTypes.string.isRequired,
};
