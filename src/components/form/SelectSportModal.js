import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, ScrollView, TouchableOpacity, Modal, Alert } from "react-native";
import styled from "styled-components"
import colors from '../../../colors';

const View = styled.View`
`;
const Text = styled.Text`
`;
const Container = styled.View`
  height: 45px;
  padding-bottom: 20px;
`;
const SportText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.darkGreyColor};
`;
const ModalBG = styled.View`
  flex: 1;
`;
const ModalBodyBtn = styled.View`
  padding-vertical: 8px;
`;
const ModalBodyText = styled.Text`
  font-size: 20px;
  text-align: center;
`;
const ModalBodyCancelText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.theme.darkGreyColor};
`;

export default class SelectSportModal extends React.Component {

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
        title: 'Futsal',
        value: 'Futsal'
      },
      {
        title: 'Basketball',
        value: 'Basketball'
      },
      {
        title: 'Baseball',
        value: 'Baseball'
      },
      {
        title: 'Volley ball',
        value: 'Volley ball'
      },
    ]

    return (
      <Container>
        <TouchableOpacity
          onPress={() => this.togglePicker()}
          title={"select"}
        >
          <SportText>{ this.state.pickerSelection }</SportText>
          <Modal
            animationType= "fade"
            visible={this.state.pickerDisplayed}
            transparent={true}
            onRequestClose={() => Alert.alert("Please select a sport.")}
          >
          <ModalBG>
            <ScrollView
              style={styles.modalContent}
              showsVerticalScrollIndicator={false}
            >
              { pickerValues.map((value, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.modalBodyBtn}
                    onPress={() => this.setPickerValue(value.value)}
                  >
                    <ModalBodyBtn>
                      <ModalBodyText>{value.title}</ModalBodyText>
                    </ModalBodyBtn>
                  </TouchableOpacity>
                )
              })}
              <TouchableOpacity onPress={() => this.togglePicker()}>
                <ModalBodyBtn>
                  <ModalBodyCancelText>Cancel</ModalBodyCancelText>
                </ModalBodyBtn>
              </TouchableOpacity>

            </ScrollView>
          </ModalBG>
          </Modal>
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  modalContent: {
    margin: 50,
    padding: 30,
    height: 400,
    borderRadius: 15,
    backgroundColor: colors.white,
    top: 150,
    left: 20,
    right: 20,
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
});
