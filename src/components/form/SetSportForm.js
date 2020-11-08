import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, TouchableOpacity, Modal, Alert } from "react-native";
import styled from "styled-components"
import colors from '../../../colors';

const View = styled.View`
`;
const Text = styled.Text`
`;
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
  color: ${(props) => props.theme.emerald};
`;
const RightWrap = styled.View`
  justify-content: center;
`;
const PropertyText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.emerald};
`;

export default class SetSportForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 'Select a Sport',
      pickerDisplayed: false
    }
  }

  setPickerValue(newValue) {
    this.setState ({
      pickerSelection: newValue
    });

    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {
    const pickerValues = [
      {
        title: 'Soccer',
        value: 'Soccer'
      },
      {
        title: 'Basketball',
        value: 'Basketball'
      },
      {
        title: 'Baseball',
        value: 'Baseball'
      },
    ]

    return (
      <TouchableOpacity
        onPress={() => this.togglePicker()}
        title={"select"}
      >
        <Container>
          <LeftWrap>
            <LabelText>Sport</LabelText>
          </LeftWrap>
          <RightWrap>
            <PropertyText>{ this.state.pickerSelection }</PropertyText>

            <Modal
              animationType= "fade"
              visible={this.state.pickerDisplayed}
              transparent={true}
              onRequestClose={() => Alert.alert("Please select a sport.")}
            >
              <View style={styles.modalContent}>

                { pickerValues.map((value, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.modalBodyBtn}
                      onPress={() => this.setPickerValue(value.value)}
                    >
                      <Text style={styles.modalBodyText}>{value.title}</Text>
                    </TouchableOpacity>
                  )
                })}

                <TouchableOpacity
                  style={styles.modalBodyBtn}
                  onPress={() => this.togglePicker()}
                >
                  <Text style={styles.modalBodyCancelText}>Cancel</Text>
                </TouchableOpacity>

              </View>
            </Modal>

          </RightWrap>
        </Container>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  modalContent: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: colors.white,
    top: 150,
    left: 10,
    right: 10,
    position: 'absolute',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalBodyBtn: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  modalBodyText: {
    fontSize: 20,
    textAlign: 'center'
  },
  modalBodyCancelText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.darkGreyColor,
  },
});
