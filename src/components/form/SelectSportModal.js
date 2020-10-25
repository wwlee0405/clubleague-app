import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, ScrollView,TouchableOpacity, Modal, Alert } from "react-native";
import colors from '../../../colors';

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
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.togglePicker()}
          title={"select"}
        >
          <Text style={styles.sportText}>{ this.state.pickerSelection }</Text>

          <Modal
            animationType= "fade"
            visible={this.state.pickerDisplayed}
            transparent={true}
            onRequestClose={() => Alert.alert("Please select a sport.")}
          >
          <View style={styles.modalBG}>
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

            </ScrollView>
          </View>

          </Modal>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingBottom: 20,
  },
  sportText: {
    fontSize: 20,
    color: colors.grey03,
  },
  modalBG: {
    flex: 1,
  },
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
