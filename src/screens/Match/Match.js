import React, { useState } from "react";
import styled from "styled-components"
import { StyleSheet, Text, ScrollView, Modal } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import SearchInput from "../../components/form/SearchInput";
import MatchCard from "../../components/contents/MatchCard";
import DailyPlayerCard from "../../components/contents/DailyPlayerCard";

import SetSportBox from "../../components/form/SetSportBox";
import SetSport from "../../components/form/SetSport";
import SetAddressBox from "../../components/form/SetAddressBox";
import SetDateBox from "../../components/form/SetDateBox";
import CreateMatchBox from "../../components/form/CreateMatchBox";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.clBackgroundColor};
`;

const Content = styled.View`
  flex: 1;
  padding-top: 250px;
  padding-bottom: 300px;
`;

const NormalSearchView = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 50px;
  margin: 5px 10px;
  padding-left: 15px;
  border: 2px solid ${props => props.theme.lightGreyColor};
  background-color: ${(props) => props.theme.whiteSmoke};
  border-radius: 10px;
`;

const NormalSearchText = styled.Text`
  padding-left: 10px;
  color: ${(props) => props.theme.lightGreyColor};
`;

const ModalBG = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.modalBackgroundColor};
`;

const ModalContent = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.white};
  margin: 50px;
  padding: 30px;
  border-radius: 15px;
`;

const ChoiceView = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: 30px;
`;

const ChoiceBox = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 10px;
`;

const DetailSearchView = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 5px 10px;
  background-color: ${(props) => props.theme.emerald};
  border-radius: 10px;
`;

const DetailSearchText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.clBackgroundColor};
`;

export default ({ onPress, navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 7 }}
      >
        <Content>
          <NormalSearchView onPress={() => navigation.navigate("SearchMatch")}>
            <Feather name="search" size={20} />
            <NormalSearchText>클럽명, 지역명, 스포츠 종목명</NormalSearchText>
          </NormalSearchView>

          <Modal
            visible={modalOpen}
            transparent={true}
            animationType="fade"
          >
          <ModalBG>
            <ModalContent>

              <SetSportBox />
              <SetSport />
              <SetAddressBox title="City" onPress={() => alert("set place")} />
              <SetDateBox title="Date" />
              <SetDateBox title="Time" />
              <Text>ClubName 검색</Text>
              <Text>게임수 검색</Text>
              <ChoiceView>
                <ChoiceBox onPress={() => setModalOpen(false)}>
                  <Feather
                    name="check"
                    size={30}
                    color={colors.emerald}
                  />
                </ChoiceBox>
                <ChoiceBox onPress={() => setModalOpen(false)}>
                  <MaterialCommunityIcons
                    name="close"
                    size={30}
                  />
                </ChoiceBox>

              </ChoiceView>
            </ModalContent>
          </ModalBG>
          </Modal>

          <DetailSearchView
            onPress={() => setModalOpen(true)}
          >
            <DetailSearchText>Detail Search</DetailSearchText>
          </DetailSearchView>



        </Content>


        <MatchCard
          avatar={require('../../data/ImgTest/dddd.jpg')}
          username="Messi"
          area="Barcelona, Spain"
          onPress={() => navigation.navigate('FeedDetails')}
          profileOnPress={() => navigation.navigate('Profile')}
        />
        <DailyPlayerCard
          avatar={require('../../data/ImgTest/cccc.jpg')}
          username="son"
          area="Seoul, Korea"
          onPress={() => navigation.navigate('FeedDetails')}
          profileOnPress={() => navigation.navigate('Profile')}
        />

      </ScrollView>
    </Container>
  );
};
