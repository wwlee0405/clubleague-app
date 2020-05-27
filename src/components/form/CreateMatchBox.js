import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import colors from '../../../colors';

export default class CreateMatchBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 'Select a club',
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
    const { onPress, title, clubName, borderLine, labelColor } = this.props;
    const borderColor = borderLine || colors.yellow;
    const color = labelColor || colors.yellow;

    const pickerValues = [
      {
        title: 'F.C. Barcelona',
        value: 'F.C. Barcelona'
      },
      {
        title: 'Arsenal',
        value: 'Arsenal'
      },
      {
        title: 'Manchester United FC',
        value: 'Manchester United FC'
      },
    ]

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[{ borderColor }, styles.box]}
          onPress={() => this.togglePicker()}
        >
          <Text style={[{ color }, styles.labelText]}>{title}</Text>
          <Text style={styles.clubName}>{ this.state.pickerSelection }</Text>

          <Modal
            animationType= "slide"
            visible={this.state.pickerDisplayed}
            transparent={true}
            onRequestClose={() => console.log('close was requsted')}
          >
            <View style={styles.pickerWrap}>
              <Text style={styles.pickerTopText}>Please select a club.</Text>

              { pickerValues.map((value, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.pickerBodyBtn}
                    onPress={() => this.setPickerValue(value.value)}
                  >
                    <Text style={styles.pickerBodyText}>{value.title}</Text>
                  </TouchableOpacity>
                )
              })}

              <TouchableOpacity
                style={styles.pickerBodyBtn}
                onPress={() => this.togglePicker()}
              >
                <Text style={styles.pickerBodyCancelText}>Cancel</Text>
              </TouchableOpacity>

            </View>
          </Modal>

        </TouchableOpacity>
      </View>
    );
  }
}

CreateMatchBox.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  clubName: PropTypes.string,
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
    borderRadius: 100,
    alignItems: 'center',
    borderWidth: 1,
  },
  labelText: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 10,
  },
  clubName: {
    flex: 5,
    paddingLeft: 5,
  },
  pickerWrap: {
    margin: 20,
    padding: 20,
    backgroundColor: colors.whiteSmoke,
    bottom: 60,
    left: 20,
    right: 20,
    alignItems: 'center',
    position: 'absolute',
  },
  pickerTopText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  pickerBodyBtn: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  pickerBodyText: {
    fontSize: 16,
  },
  pickerBodyCancelText: {
    fontSize: 16,
    color: colors.darkGreyColor,
  },
});
