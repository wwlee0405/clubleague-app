import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import SearchInput from "../../components/form/SearchInput";
import FeedCard from "../../components/contents/FeedCard";
import feedcard from "../../data/feedcard";

class Match extends React.Component {

  renderFeedCard() {
    const { onPress, navigation } = this.props;
    return feedcard.map((feedcard, index) => {
      return (
        <View
          key={`feedcard-${index}`}
        >
          <FeedCard
            key={`feedcard-item-${index}`}
            profileImg={feedcard.profileImg}
            user={feedcard.user}
            address={feedcard.address}
            bodyImg={feedcard.bodyImg}
            bodyText={feedcard.bodyText}
            hits={feedcard.hits}
            onPress={() => navigation.navigate('FeedCardDetailsScreen')}
            profileOnPress={() => navigation.navigate('Profile')}
          />
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1, paddingTop: 250, paddingBottom: 300 }}>
            <SearchInput placeholderText="종목명, 도시명, 클럽명" />
            <SearchInput placeholderText="경기일자" />
          </View>

          {this.renderFeedCard()}

        </ScrollView>
      </View>
    );
  }
}

export default Match;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
