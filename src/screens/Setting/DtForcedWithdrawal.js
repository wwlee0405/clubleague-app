import React, { Component } from 'react';
import { ScrollView, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";
import SelectListItem from "../../components/items/SelectListItem";
import clubplayers from "../../data/clubplayers";
import colors from '../../../colors';

const View = styled.View`
  flex: 1;
  background-color: ${props => props.theme.clBackgroundColor};
  padding-top: 10px;
`;
const BtnText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 20px;
`;

export default ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <BtnText>강제탈퇴</BtnText>
        <FlatList
          data={clubplayers}
          renderItem={({item}) =>
            <SelectListItem
              onPress={() => navigation.navigate('DetailsSetting')}
              avatar={item.avatar}
              user={item.user}
              area={item.area}
            />
          }
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </View>
  );
};
