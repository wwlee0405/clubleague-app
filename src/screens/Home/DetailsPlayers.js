import React from "react";
import { StyleSheet, Text, View, ScrollView , TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

import ClubPlayers from "../../components/contents/ClubPlayers";

class DetailsPlayers extends React.Component {

  renderClubProfile() {
    const { onPress, navigation } = this.props;

      return (
        <View>
          <ClubPlayers
            onPress={() => navigation.navigate('Profile')}
          />

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

          {this.renderClubProfile()}

        </ScrollView>
      </View>

    );
  }
}

export default DetailsPlayers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
