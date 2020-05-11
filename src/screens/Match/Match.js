import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate("Details")}>
      <Text>Match!</Text>
    </TouchableOpacity>
  </View>
);