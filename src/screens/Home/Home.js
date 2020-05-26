import React from "react";
import { StyleSheet, Text, View, ScrollView , TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';
import Categories from "../../components/contents/Categories";

import categoriesList from "../../data/categories";
import FeedCard from "../../components/contents/FeedCard";
import feedcard from "../../data/feedcard";

class Home extends React.Component {

  renderFeedCard() {
    const { onPress, navigation } = this.props;
    return feedcard.map((feedcard, index) => {
      return (
        <View key={`feedcard-${index}`}>
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

    const { navigation } = this.props;

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
            <Categories
              categories={categoriesList}
              onPress={() => navigation.navigate('Details')}
            />
          </View>

        </View>

        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >

          {this.renderFeedCard()}

        </ScrollView>
      </View>

    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
  clubContainer: {
    borderBottomWidth: 1,
    borderColor: colors.lightGreyColor,
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
    height: 120
  },
});
