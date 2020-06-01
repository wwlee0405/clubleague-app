import React from "react";
import { StyleSheet, Text, View, TextInput , TouchableOpacity, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';

import SetSportBox from "../../components/form/SetSportBox";
import SetAddressBox from "../../components/form/SetAddressBox";
import SetDateBox from "../../components/form/SetDateBox";
import CreateMatchBox from "../../components/form/CreateMatchBox";

class Writing extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="This is Writing section~!"
          style={{ paddingLeft: 15 }}
        />

        <View style={{ flex: 1, alignItems: 'center' }}>

          <SetSportBox />
          <SetAddressBox title="City" onPress={() => alert("set place")} />
          <SetDateBox title="Date" />
          <SetDateBox title="Time" />
          <CreateMatchBox title="Home" borderLine={colors.darkGreyColor} labelColor={colors.darkGreyColor} />
          <CreateMatchBox title="Away" />
          <CreateMatchBox title="Away" />

          <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
            <View>
              <TouchableOpacity
                style={{ width: 30, height: 30, borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.emerald }}
                onPress={() => alert("Awaybox increase")}
              >
                <Text style={{ color: colors.white }}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: 20 }}>
              <TouchableOpacity
                style={{ width: 30, height: 30, borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.emerald }}
                onPress={() => alert("Awaybox decrease")}
              >
                <Text style={{ color: colors.white }}>-</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginTop: 70 }}>
          <View style={{ paddingLeft: 15 }}>
            <TouchableOpacity
              style={{ width: null, height: 45, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1,}}
              onPress={() => alert("create match box")}
            >
              <Text style={{ paddingLeft: 10, paddingRight:10 }}>Match</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: 15 }}>
            <TouchableOpacity
              style={{ width: null, height: 45, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1,}}
              onPress={() => alert("create daily player box")}
            >
              <Text style={{ paddingLeft: 10, paddingRight:10 }}>Daily Player</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Writing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
