import React, { useState } from "react";
import { View, Picker, StyleSheet, TouchableOpacity, Text, TextInput } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../../../colors';

const WritingItem = ({ clubOnPress, dailyPlayerOnPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <TouchableOpacity onPress={clubOnPress}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="soccer-field" size={30} color={colors.emerald} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={dailyPlayerOnPress}>
          <View style={styles.icon}>
            <Feather name="user-plus" size={30} color={colors.emerald} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.icon}>
            <Feather name="user-plus" size={30} color={colors.emerald} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.icon}>
            <Feather name="paperclip" size={30} color={colors.emerald} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.icon}>
            <Feather name="image" size={30} color={colors.emerald} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default WritingItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.clBackgroundColor,
    height: 55,
    width: '100%',
    borderTopWidth: 0.8,
    borderColor: colors.lightGreyColor
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 15
  },
});
