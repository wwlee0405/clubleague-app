import * as React from 'react';
import { StyleSheet, Text, Button, ScrollView } from "react-native";
import colors from '../../../colors';
import { gql } from "apollo-boost";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import ClubHome from "../../components/contents/ClubHome";

const SeeTeam = gql`
  query seeTeam($id: String!) {
    searchTeam(id: $id) {
      id
      teamName
      teamArea
      teamInfo
    }
  }
`;

export default ({ route, navigation }) => {
  const { loading, data } = useQuery(SeeTeam);

  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <ClubHome
        onPress={() => navigation.navigate('Details')}
        teamName="Barcelona"
        sports="Soccer"
        members="15"
        teamOwner="Ernesto Valverde"
        teamArea="Barcelona, Spain"
      />
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.seeTeam &&
        data.seeTeam.map(teams => (
          <ClubHome onPress={() => navigation.navigate("Details")} key={teams.id} teamName={teams.teamName} />
      )))}

      <Text>Team Schedule</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
