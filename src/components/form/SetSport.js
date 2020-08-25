import React, { useState } from "react";
import { View, Picker, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from '../../../colors';

const SetSport = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <View
        style={styles.box}
      >
        <Text style={styles.labelText}>Sport</Text>

        <Picker
          selectedValue={selectedValue}
          style={styles.sportText}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Soccer" value="soccer" />
          <Picker.Item label="Futsal" value="futsal" />
          <Picker.Item label="Basketball" value="basketball" />
          <Picker.Item label="Baseball" value="baseball" />
        </Picker>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingTop: 10,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    width: 250,
    height: 45,
    borderRadius: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.emerald,
  },
  labelText: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 10,
    color: colors.emerald,
  },
  sportText: {
    flex: 5,
    paddingLeft: 5,
    height: 50,
    width: 150,
  },
});

export default SetSport;
