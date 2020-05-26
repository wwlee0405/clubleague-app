import React from "react";
import { StyleSheet, Text, View, ScrollView , TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import ClubSchedule from "../../components/contents/ClubSchedule";

class DetailsSchedule extends React.Component {

  renderClubSchedule() {

      return (
        <View>
          <ClubSchedule />

        </View>
      );

  }

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>

        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >

          {this.renderClubSchedule()}

        </ScrollView>
      </View>

    );
  }
}

export default DetailsSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
