import React, { Component } from 'react';
import styled from "styled-components";
import colors from '../../../colors';

const View = styled.View`
  flex: 1;
  background-color: ${props => props.theme.clBackgroundColor};
  padding-top: 10px;
`;
const Touchable = styled.TouchableOpacity``;
const Btn = styled.View`
  height: 50px;
  justify-content: center;
`;
const BtnText = styled.Text`
  font-size: 15px;
  padding-left: 20px;
`;

export default ({ navigation }) => {
  return (
    <View>
      <Touchable onPress={() => null}>
        <Btn>
          <BtnText>푸시 설정</BtnText>
        </Btn>
      </Touchable>
    </View>
  );
};
