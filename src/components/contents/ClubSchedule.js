import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import styled from "styled-components"
import colors from '../../../colors';
import ScheduleSectionList from "../items/ScheduleSectionList";

const Container = styled.View`
  flex: 1;
  padding-top: 22px;
`;
const SectionHeaderText = styled.Text`
  padding: 2px 10px;
  font-size: 14px;
  background-color: ${(props) => props.theme.ghostWhite};
`;

const ClubSchedule = ({ onPress, time }) => {
  return (
    <Container>
      <SectionList
        sections={[
          {title: 'SEP 2019', data: ['01', '02', '03']},
          {title: 'OCT 2019', data: ['01', '03', '15']},
          {title: 'NOV 2019', data: ['05', '15', '17', '25', '27', '29', '30']},
          {title: 'DEC 2019', data: ['05', '15', '17', '25', '27', '29', '30']},
        ]}
        renderItem={({item}) =>
          <ScheduleSectionList
            day={item}
            week="WED"
            title="Match"
            time="18:00"
            area="Barcelona, Spain"
          />
        }
        renderSectionHeader={({section}) =>
          <SectionHeaderText>{section.title}</SectionHeaderText>
        }
        keyExtractor={(item, index) => index}
      />
    </Container>
  );
};

export default ClubSchedule;
