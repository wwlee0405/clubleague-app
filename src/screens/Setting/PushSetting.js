import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../../../colors';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.btnText}>푸시 설정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: colors.clBackgroundColor,
   paddingTop: 10,
  },
  button: {
    height: 50,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 15,
    paddingLeft: 20,
  }
});
