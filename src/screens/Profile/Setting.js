import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from '../../../colors';

export default ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>signOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});
