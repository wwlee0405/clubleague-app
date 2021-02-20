import React, { useState } from "react";
import styled from "styled-components"
import { StyleSheet, ScrollView, Modal } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import SearchInput from "../../components/form/SearchInput";
import MatchCard from "../../components/contents/MatchCard";
import DailyPlayerCard from "../../components/contents/DailyPlayerCard";

import SetSportBox from "../../components/form/SetSportBox";
import SetAreaBox from "../../components/form/SetAreaBox";
import SetDateBox from "../../components/form/SetDateBox";
import CreateMatchBox from "../../components/form/CreateMatchBox";

const Text = styled.Text`
`;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.clBackgroundColor};
`;

const SearchContainer = styled.View`
  flex: 1;
  padding-top: 250px;
  padding-bottom: 300px;
`;

const Touchable = styled.TouchableOpacity``;

const NormalSearch = styled.View`
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
  justify-content: space-between;
  padding-top: 30px;
`;
const ChoiceCheck = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 20px;
  padding: 25px;
`;

const DetailSearch = styled.View`
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

function Match({ navigation, route, onPress }) {
  const [modalOpen, setModalOpen] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
         <MaterialCommunityIcons
            name="soccer"
            size={30}
            style={{ paddingLeft: 10 }}
         />
      ),
      headerTitle: (
         <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Clubleague
         </Text>
      ),
      headerRight: () => (
        <Touchable
           onPress={() => navigation.navigate("Writing")}
           title="Writing"
        >
           <Feather
              name="edit"
              size={25}
              style={{ paddingRight: 10 }}
           />
        </Touchable>
      ),
    }, []);
  });

  return (
      <Container>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 7 }}
        >
          {/*Search*/}
          <SearchContainer>
            <Touchable onPress={() => navigation.navigate("SearchMatch")}>
              <NormalSearch>
                <Feather name="search" size={20} />
                <NormalSearchText>클럽명, 지역명, 스포츠 종목명</NormalSearchText>
              </NormalSearch>
            </Touchable>

            <Modal
              visible={modalOpen}
              transparent={true}
              animationType="fade"
            >
            <ModalBG>
              <ModalContent>

                <SetSportBox />
                <SetAreaBox title="Area" onPress={() => alert("set place")} />
                <SetDateBox title="Date" />
                <SetDateBox title="Time" />
                <Text>ClubName 검색</Text>
                <Text>게임수 검색</Text>
                <ChoiceView>
                  <Touchable onPress={() => setModalOpen(false)}>
                    <ChoiceCheck>
                      <Feather name="check" size={30} color={colors.emerald} />
                    </ChoiceCheck>
                  </Touchable>
                  <Touchable onPress={() => setModalOpen(false)}>
                    <ChoiceCheck>
                      <MaterialCommunityIcons name="close" size={30} />
                    </ChoiceCheck>
                  </Touchable>
                </ChoiceView>
              </ModalContent>
            </ModalBG>
            </Modal>

            <Touchable onPress={() => setModalOpen(true)}>
              <DetailSearch>
                <DetailSearchText>Detail Search</DetailSearchText>
              </DetailSearch>
            </Touchable>
          </SearchContainer>
          {/*Post*/}
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
}

export default Match;
