import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import colors from '../../../colors';
import WritingItem from "../../components/contents/WritingItem";

const CREATE_POST = gql`
   mutation createPost(
      $text: String
   ) {
      createPost(text: $text)
   }
`;

const View = styled.View`
`;

const Container = styled.View`
   flex: 1;
   background-color: ${(props) => props.theme.clBackgroundColor};
`;

const TextInput = styled.TextInput`
  padding-horizontal: 15px;
  padding-top: 15px;
	background-color: ${(props) => props.theme.clBackgroundColor};
`;

function Writing({ navigation, route }) {

  const [value, onChangeText] = useState("");
  const [loading, setLoading] = useState(false);
  const [createPostMutation] = useMutation(CREATE_POST, {
     variables: {
        value: value
     },
  });
  const createPostSubmit = async () => {
     const value = value;
     if (value === "") {
        return Alert.alert("Please, I need your Post.");
     }
     try {
        setLoading(true);
        const {
           data: { createPost },
        } = await createPostMutation();
        if (createPost) {
           Alert.alert("Post created", "check!");
           navigation.navigate("Match");
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
          onPress={() => createPostSubmit()}
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
            <ScrollView>
              <TextInput
                 onChangeText={text => onChangeText(text)}
                 placeholder="If you make match, select match icon below."
                 autoCapitalize="words"
                 autoCorrect={false}
              	 value={value}
              />
            </ScrollView>

            <View>
              <WritingItem
                clubOnPress={() => navigation.navigate('GameMatch')}
                dailyPlayerOnPress={() => navigation.navigate('Match')}
              />
            </View>
         </Container>
      </TouchableWithoutFeedback>
  );
}

export default Writing;
