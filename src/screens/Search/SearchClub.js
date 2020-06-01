import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import colors from '../../../colors';
import SearchClubCard from "../../components/contents/SearchClubCard";

class SearchClubScreen extends React.Component {

  static options = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: colors.emerald,
      },
      headerTitle: (
        <View>
          <TextInput
            style={styles.inputSection}
            placeholder="Search for club name, sport, reader name"
            placeholderTextColor= {colors.sacramento}
          />
        </View>
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <SearchClubCard
            onPress={() => navigation.navigate('Details')}
            clubProfileImg={require('../../data/ImgTest/1ars.jpg')}
            clubName="FC Seoul"
            clubInfo="서울에서 활동하는 축구동호회입니다."
            sports="Soccer"
            address="Seoul, Korea"
            members="15"
            leaderUser="Ernesto Valverde"
          />
          <SearchClubCard
            onPress={() => navigation.navigate('Details')}
            clubProfileImg={require('../../data/ImgTest/2bar.jpg')}
            clubName="FC Barcelona"
            clubInfo="난곡에서 활동하는 축구동호회입니다."
            sports="Soccer"
            address="Barcelona, Spain"
            members="17"
            leaderUser="Ernesto Valverde"
          />
          <SearchClubCard
            onPress={() => navigation.navigate('Details')}
            clubProfileImg={require('../../data/ImgTest/aaaa.jpg')}
            clubName="FC Gangnam"
            clubInfo="강남에서 활동하는 축구동호회입니다."
            sports="Soccer"
            address="Seoul, Korea"
            members="20"
            leaderUser="Ernesto Valverde"
          />


        </ScrollView>
      </View>
    );
  }
}

export default SearchClubScreen;

const styles = StyleSheet.create({
  inputSection: {
    fontSize: 15,
    color: colors.sacramento,
  },
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
