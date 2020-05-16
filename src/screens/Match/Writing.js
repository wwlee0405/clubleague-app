import React from "react";
import { StyleSheet, Text, View, TextInput , TouchableOpacity, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';

class Writing extends React.Component {

  static navigationOptions = ({ navigation }) => {
    
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Match')}
          title="submit"
        >
          <Feather name="check" size={25} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      )

  };

  render() {
    return (
      <View>
        <Text>details3</Text>
      </View>
    )
  }
}

export default Writing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
