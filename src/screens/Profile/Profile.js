import React, { useEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from "../../../colors";
import { gql } from "apollo-boost";
import { USER_FRAGMENT } from "../../../fragments";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import UserProfile from "../../components/contents/UserProfile";

const ME = gql`
  {
    me {
      user {
        avatar
        username
        fullName
        email
      }
    }
  }
`;

export default ({ navigation }) => {
  const { loading, data } = useQuery(ME);
  return (
    <ScrollView>
      {
        loading ? <Loader /> :
        data &&
        data.me &&
        data.me.user &&
        <UserProfile
          key={data.me.user.id}
          avatar={data.me.user.avatar}
          username={data.me.user.username}
          fullName={data.me.user.fullName}
          onPress={() => navigation.navigate('EditProfile')}
        />
      }
    </ScrollView>
  );
};
