import React from "react";
import { StyleSheet, Text, View, ScrollView , TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import ClubHome from "../../components/contents/ClubHome";

import FeedCard from "../../components/contents/FeedCard";
import feedcard from "../../data/feedcard";

class DetailsHome extends React.Component {

  renderClubHome() {
    const { onPress, navigation } = this.props;
    return feedcard.map((feedcard, index) => {
      return (
        <View key={`feedcard-${index}`}>
          <ClubHome
            onPress={() => navigation.navigate('Details')}
            clubImg={require('../../data/ImgTest/aaaa.jpg')}
            clubProfileImg={require('../../data/ImgTest/2bar.jpg')}
            clubName="F.C. Barcelona"
            sports="Soccer"
            members="15"
            leaderUser="Ernesto Valverde"
            address="Barcelona"

            feedOnPress={() => navigation.navigate('FeedCardDetailsScreen')}
            feedProfileOnPress={() => navigation.navigate('Profile')}
          />

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
    backgroundColor: 'white',
  },
});
