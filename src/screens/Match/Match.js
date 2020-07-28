import React, { useState } from "react";
import styled from "styled-components"
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import SearchInput from "../../components/form/SearchInput";
import MatchCard from "../../components/contents/MatchCard";
import MatchCard2 from "../../components/contents/MatchCard2";

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

const ChoiceBox = styled.View`
  flex: 1;
  align-items: center;
`;

const Touchable = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export default ({ onPress, navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <Content>
          <SearchInput placeholderText="종목명, 도시명, 클럽명" />

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
                <ChoiceBox>
                  <Feather
                    name="check"
                    size={30}
                    color={colors.emerald}
                    onPress={() => setModalOpen(false)}
                  />
                </ChoiceBox>
                <ChoiceBox>
                  <MaterialCommunityIcons
                    name="close"
                    size={30}
                    onPress={() => setModalOpen(false)}
                  />
                </ChoiceBox>

              </ChoiceView>
            </ModalContent>
          </ModalBG>
          </Modal>

          <Touchable
            onPress={() => setModalOpen(true)}
          >
            <Text>Detial Search</Text>
          </Touchable>



        </Content>


        <MatchCard
          username="Son"
          area="Seoul, Korea"
          bodyText="한번 붙자!! 05/17 매칭 초청합니다. 팀명:F.C. Barcelona 유니폼:줄무늬, 매너:최고, 장소:캄프누"
          onPress={() => navigation.navigate('FeedDetails')}
          profileOnPress={() => navigation.navigate('Profile')}
        />
        <MatchCard2
          username="Son"
          area="Seoul, Korea"
          bodyText="한번 붙자!! 05/17 매칭 초청합니다. 팀명:F.C. Barcelona 유니폼:줄무늬, 매너:최고, 장소:캄프누"
          onPress={() => navigation.navigate('FeedDetails')}
          profileOnPress={() => navigation.navigate('Profile')}
        />
      </ScrollView>
    </Container>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
