import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
   TouchableWithoutFeedback,
   Keyboard,
   Alert,
   TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import constants from "../../../constants";
import colors from "../../../colors";

import SelectSportModal from "../../components/form/SelectSportModal";

const CREATE_TEAM = gql`
   mutation createTeam(
      $teamName: String!
      $teamArea: String
      $teamInfo: String
   ) {
      createTeam(teamName: $teamName, teamArea: $teamArea, teamInfo: $teamInfo)
   }
`;

const View = styled.View`
`;

const Container = styled.View`
   justify-content: center;
   align-items: center;
   flex: 1;
   background-color: ${(props) => props.theme.clBackgroundColor};
`;

const Avatar = styled.View`
   justify-content: center;
   align-items: center;
   width: 130px;
   height: 130px;
   border-radius: 100px;
   background-color: ${(props) => props.theme.white};
`;

const TextInput = styled.TextInput`
	width: ${constants.width / 1.7}px;
	padding: 10px;
	background-color: ${(props) => props.theme.clBackgroundColor};
	text-align: center;
	font-size: 20px;
`;

const ExplanationText = styled.Text`
   padding: 40px 70px;
   font-size: 15px;
   text-align: center;
`;

function NewClub({ navigation, route }) {

   const [value, onChangeText] = useState("");
   const [loading, setLoading] = useState(false);
   const [createClubMutation] = useMutation(CREATE_TEAM, {
      variables: {
         teamName: value
      },
   });
   const newClubSubmit = async () => {
      const teamName = value;
      if (teamName === "") {
         return Alert.alert("Please, I need your Club Name.");
      }
      try {
         setLoading(true);
         const {
            data: { createTeam },
         } = await createClubMutation();
         if (createTeam) {
            Alert.alert("Club created", "check!");
            navigation.navigate("Home");
         }
      } catch (e) {
         console.log(e);
      } finally {
         setLoading(false);
      }
   };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
            <TouchableOpacity
               onPress={() => newClubSubmit()}
               title="Submit"
            >
          <Feather name="check" size={25} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    }, []);
  });

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <Container>
            <View style={{ paddingBottom: 30 }}>
              <TouchableOpacity onPress={() => alert("edit img")}>
                <Avatar>
                  <Feather name="camera" size={40} style={{ color: colors.lightGreyColor }} />
                </Avatar>
              </TouchableOpacity>
            </View>

            <SelectSportModal />

            <TextInput
               onChangeText={text => onChangeText(text)}
               placeholder="Input Club Name"
               autoCapitalize="words"
               autoCorrect={false}
            	 value={value}
            />

            <TextInput
               placeholder="Input Club Area"
               autoCapitalize="words"
               autoCorrect={false}
            />

            <ExplanationText>You can change club name and picture after you create it.</ExplanationText>
         </Container>
      </TouchableWithoutFeedback>
  );
}

export default NewClub;
