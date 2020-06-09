import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import colors from '../../../colors';
import SearchBar from "../../components/form/SearchBar";
import SearchClubCard from "../../components/contents/SearchClubCard";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: () => (
      <SearchBar />
    )
  });


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
            teamName="FC Seoul"
            teamInfo="서울에서 활동하는 축구동호회입니다."
            sports="Soccer"
            teamArea="Seoul, Korea"
            members="15"
            teamOwner="Ernesto Valverde"
          />


        </ScrollView>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  inputSection: {
    fontSize: 15,
    backgroundColor: colors.whiteSmoke,
    borderRadius: 5,
    paddingLeft: 10,
    width: 300,
  },
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
