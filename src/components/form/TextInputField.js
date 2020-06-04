import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from '../../../colors';

const InputField = ({ labelText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{labelText}</Text>
      <TextInput
        style={styles.inputField}
      />
    </View>
  );
};


InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingBottom: 10,
  },
  labelText: {
    fontWeight: '600',
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 1,
    paddingBottom: 5,
  }
});
