import React from "react";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { USER_FRAGMENT } from "../../../fragments";
import Loader from "../../components/Loader";
import { ScrollView } from "react-native";
import UserProfile from "../../components/contents/UserProfile";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

export default ({ navigation, route }) => {
  const { loading, data } = useQuery(GET_USER, {
    variables: { username: route.params("username") }
  });
  return (
    <ScrollView>

      {
        loading ? <Loader /> :
        data &&
        data.seeUser &&
        data.seeUser.user &&
        <UserProfile
          key={data.seeUser.user.id}
          avatar={data.seeUser.user.avatar}
          username={data.seeUser.user.username}
          fullName={data.seeUser.user.fullName}
        />
      }
    </ScrollView>
  );
};
