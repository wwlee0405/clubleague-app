import React, { useState } from "react";
import styled from "styled-components"
import { StyleSheet, Text, ScrollView, Modal } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import SearchInput from "../../components/form/SearchInput";
import MatchCard from "../../components/contents/MatchCard";

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

const ChoiceBox = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 10px;
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
        style={{ paddingHorizontal: 7 }}
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

          <Touchable
            onPress={() => setModalOpen(true)}
          >
            <Text style={{ paddingTop: 10, fontSize: 20 }}>Detail Search</Text>
          </Touchable>



        </Content>


        <MatchCard
          avatar={require('../../data/ImgTest/dddd.jpg')}
          username="Messi"
          area="Barcelona, Spain"
          onPress={() => navigation.navigate('FeedDetails')}
          profileOnPress={() => navigation.navigate('Profile')}
        />

      </ScrollView>
    </Container>
  );
};
