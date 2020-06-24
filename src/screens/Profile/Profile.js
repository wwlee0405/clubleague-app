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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
  contantContainer: {
    paddingTop: 10,
  },
  topWrap: {
    flexDirection: 'row',
  },
  imgWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textWrap: {
    flex: 1,
  },
  textWrapPadding: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  nameTag: {
    fontSize: 10,
    color: colors.darkGreyColor,
  },
  property: {
    fontSize: 15,
    color: colors.blackColor,
  },
  buttonWrap: {
    paddingTop: 20,
  },
  editProfileButton: {
    flex: 1,
    marginRight: 25,
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: colors.emerald,
    backgroundColor: colors.clBackgroundColor,
    borderRadius: 8,
  },
  editProfileButtonText: {
    fontWeight: 'bold',
    color: colors.emerald,
  },
});
