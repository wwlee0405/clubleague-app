import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput , TouchableOpacity, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';

import WritingItem from "../../components/contents/WritingItem";

const CREATE_POST = gql`
   mutation createPost(
      $text: String
   ) {
      createPost(text: $text)
   }
`;

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Match')}
        title="Submit"
      >
        <Feather name="check" size={25} style={{ paddingRight: 10 }} />
      </TouchableOpacity>
    ),
  });

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            placeholder="If you make match, select match icon below."
            style={{ paddingHorizontal: 15, paddingTop: 15 }}
          />
        </ScrollView>
        <View>
          <WritingItem
            clubOnPress={() => navigation.navigate('GameMatch')}
            dailyPlayerOnPress={() => navigation.navigate('Match')}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
