import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../../components/context";
import styled from "styled-components";
import colors from '../../../colors';

export default ({ navigation }) => {

  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {signOut()}}
      >
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
