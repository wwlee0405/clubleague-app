import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert } from "react-native";
import colors from '../../../colors';

export default class SetSportBox extends React.Component {

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
    const { borderLine, labelColor } = this.props;
    const borderColor = borderLine || colors.emerald;
    const color = labelColor || colors.emerald;

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
      <View style={styles.container}>
        <TouchableOpacity
          style={[{ borderColor }, styles.box]}
          onPress={() => this.togglePicker()}
          title={"select"}
        >
          <Text style={[{ color }, styles.labelText]}>Sport</Text>
          <Text style={styles.sportText}>{ this.state.pickerSelection }</Text>

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

        </TouchableOpacity>
      </View>
    );
  }
}

SetSportBox.propTypes = {
  borderLine: PropTypes.string,
  labelColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingTop: 10,
  },
  box: {
    flex: 6,
    flexDirection: 'row',
    width: 250,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1
  },
  labelText: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 12,
  },
  sportText: {
    flex: 5,
    paddingLeft: 10,
  },
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
