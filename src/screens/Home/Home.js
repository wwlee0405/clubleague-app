import React, { useState } from "react";
import { ScrollView, RefreshControl, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from "../../../colors";
import { gql } from "apollo-boost";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import ClubTeams from "../../components/contents/ClubTeams";

const SeeMyTeam = gql`
  query seeTeam($id: String!) {
    seeTeam(id: $id)
    {
      teamName
      teamArea
      teamInfo
    }
  }
`;

export default ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, refetch } = useQuery(SeeMyTeam, {
    variables: { id: "ckb1sy5vntyr00999g1bq9tyb"}
  });
  const refresh = async () => {
    try {
      setRefreshing(true);
      await refetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  return (
    <View style={styles.container}>

      <View style={styles.clubContainer}>
        <View style={styles.clubContainerTopWrap}>
          <Text style={styles.clubContainerRightText}>Club</Text>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('NewClub')}
              style={styles.clubContainerLeftButton}>
              <Feather name="plus-circle" style={styles.clubContainerLeftButtonIcon} />
              <Text style={styles.clubContainerLeftText}>New Club</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.clubContainerBottomWrap}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.clubsWrap}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            }
          >

            {loading ? (
              <Loader />
            ) : (
              data &&
              data.seeMyTeam &&
              data.seeMyTeam.map(clubTeams => <ClubTeams key={clubTeams.id} teamName={clubTeams.teamName} />)
            )}

          </ScrollView>
        </View>

      </View >

      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={styles.gameScheduleWrap}
      >
        <Text>Schedule</Text>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clubContainer: {
    borderBottomWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
  },
  clubContainerTopWrap: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
  },
  clubContainerRightText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  clubContainerLeftButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clubContainerLeftButtonIcon: {
    fontSize: 18,
  },
  clubContainerLeftText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  clubContainerBottomWrap: {
    height: 120,
  },
  clubsWrap: {
    alignItems: 'center',
    paddingStart: 5,
    paddingEnd: 5,
  },
  gameScheduleWrap: {
    backgroundColor: colors.clBackgroundColor,
  },
});
