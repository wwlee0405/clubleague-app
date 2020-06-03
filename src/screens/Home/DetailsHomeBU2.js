import React from "react";
import { StyleSheet, Text, View, ScrollView , TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import ClubHome from "../../components/contents/ClubHome";

import FeedCard from "../../components/contents/FeedCard";
import feedcard from "../../data/feedcard";

import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

export const SeeMyTeam = gql`
  type Query {
    seeMyTeam: [Team!]!
  }
`;

class DetailsHome extends React.Component {

  renderClubHome() {
    const { onPress, navigation } = this.props;
    const { loading, data } = useQuery(SeeMyTeam);
    return feedcard.map((feedcard, index) => {
      return (
        <View
          key={`feedcard-${index}`}
          style={styles.clubHome}
        >
          {data && data.seeMyTeam &&
            <ClubHome
              onPress={() => navigation.navigate('Details')}
              feedOnPress={() => navigation.navigate('FeedCardDetailsScreen')}
              feedProfileOnPress={() => navigation.navigate('Profile')}
              {...data.seeMyTeam}
            />
          }

        </View>
      );
    });
  }

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>

        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >

          {this.renderClubHome()}

        </ScrollView>
      </View>

    );
  }
}

export default DetailsHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
