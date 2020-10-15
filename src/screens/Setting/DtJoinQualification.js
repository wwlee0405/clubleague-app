import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../../../colors';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("가입조건 도시 - 1.제한없음 2.같은 도시만")}
      >
        <Text style={styles.btnText}>도시</Text>
      </TouchableOpacity>
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
