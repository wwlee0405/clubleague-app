import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity, TextInput, Button } from "react-native";
import styled from "styled-components"
import colors from '../../../colors';

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.clBackgroundColor};
  padding-top: 10px;
`;
const ImgWrap = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 30px;
`;
const Touchable = styled.TouchableOpacity``;
const View = styled.View`
	flex: 1;
  padding-left: 15px;
`;
const TextName = styled.Text`
  padding: 15px;
  font-size: 15px;
  font-weight: bold;
`;
const BtnWrap = styled.View`
	flex: 1;
  align-items: center;
`;
const Btn = styled.View`
  width: 100px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.blueColor};
  margin-top: 50px;
`;
const BtnText = styled.Text`
  color: ${(props) => props.theme.white};
`;

export default ({ navigation }) => {
  return (
    <Container>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <ImgWrap>
          <Touchable onPress={() => alert("edit img")}>
            <Image
              source={require('../../data/ImgTest/aaaa.jpg')}
              style={{ width: 180, height: 180, borderRadius: 100 }}
            />
          </Touchable>
        </ImgWrap>
        <View>
          <TextName>클럽 이름</TextName>
          <TextInput placeholder="Club Name" style={{ paddingLeft: 15 }} />
        </View>

        <View>
          <TextName>클럽 소개글</TextName>
          <TextInput placeholder="Introduce your club" style={{ paddingLeft: 15 }} />
        </View>

        <BtnWrap>
          <TouchableOpacity
            onPress={() => {
              // Pass params back to Profile screen
              navigation.navigate('Details', { post: postText });
            }}
          >
            <Btn>
              <BtnText>Done</BtnText>
            </Btn>
          </TouchableOpacity>
        </BtnWrap>

      </ScrollView>
    </Container>
  );
};
