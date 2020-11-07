import React, { Component } from 'react';
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import colors from '../../../colors';

const View = styled.View`
  flex: 1;
  background-color: ${props => props.theme.clBackgroundColor};
  padding-top: 10px;
`;
const Touchable = styled.TouchableOpacity``;
const SettingLink = styled.View`
  height: 50px;
  justify-content: center;
`;
const SettingLinkText = styled.Text`
  font-size: 15px;
  padding-left: 20px;
`;

export default ({ navigation }) => {
  return (
    <View>
      <Touchable onPress={() => navigation.navigate('PushSetting')}>
        <SettingLink>
          <SettingLinkText>푸시 알림</SettingLinkText>
        </SettingLink>
      </Touchable>

      <Touchable onPress={() => navigation.navigate('Language')}>
        <SettingLink>
          <SettingLinkText>언어</SettingLinkText>
        </SettingLink>
      </Touchable>

      <Touchable onPress={() => navigation.navigate('Help')}>
        <SettingLink>
          <SettingLinkText>서비스 도움말</SettingLinkText>
        </SettingLink>
      </Touchable>

      <Touchable onPress={() => alert("로그아웃 하시겠습니까?")}>
        <SettingLink>
          <SettingLinkText>SignOut</SettingLinkText>
        </SettingLink>
      </Touchable>

      <Touchable onPress={() => alert("계정을 삭제하시겠습니까?")}>
        <SettingLink>
          <SettingLinkText>Clubleague 탈퇴</SettingLinkText>
        </SettingLink>
      </Touchable>
    </View>
  );
};
