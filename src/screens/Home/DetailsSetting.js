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
      <Touchable onPress={() => navigation.navigate('DtBasicInfo')}>
        <SettingLink>
          <SettingLinkText>Club 기본정보관리 - 클럽 이름 및 소개글 설정</SettingLinkText>
        </SettingLink>
      </Touchable>

      <Touchable onPress={() => navigation.navigate('DtJoinQuestion')}>
        <SettingLink>
          <SettingLinkText>Member 활동관리 - 가입신청/질문 설정</SettingLinkText>
        </SettingLink>
      </Touchable>

      <Touchable onPress={() => navigation.navigate('DtJoinQualification')}>
        <SettingLink>
          <SettingLinkText>Member 활동관리 - 가입조건 설정</SettingLinkText>
        </SettingLink>
      </Touchable>

      <Touchable onPress={() => navigation.navigate('DtForcedWithdrawal')}>
        <SettingLink>
          <SettingLinkText>Member 활동관리 - 강제탈퇴</SettingLinkText>
        </SettingLink>
      </Touchable>

      <Touchable onPress={() => navigation.navigate('DtCoLeader')}>
        <SettingLink>
          <SettingLinkText>Management 설정 - 공동리더</SettingLinkText>
        </SettingLink>
      </Touchable>

      <Touchable onPress={() => navigation.navigate('DtEmpowerment')}>
        <SettingLink>
          <SettingLinkText>Management 설정 - 리더위임</SettingLinkText>
        </SettingLink>
      </Touchable>

      <Touchable onPress={() => alert("클럽을 삭제하시겠습니까? 삭제 후에는 복구가 불가능합니다.")}>
        <SettingLink>
          <SettingLinkText>Club 삭제</SettingLinkText>
        </SettingLink>
      </Touchable>
    </View>
  );
};
