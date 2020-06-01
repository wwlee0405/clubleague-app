import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../../../colors';

class ClubSchedule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Setting')}
          >
            <Text style={styles.btnText}>Club 기본 정보 관리</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Setting')}
          >
            <Text style={styles.btnText}>Member 활동 관리</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Setting')}
          >
            <Text style={styles.btnText}>Management 설정</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ClubSchedule;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: colors.clBackgroundColor,
   paddingTop: 10,
  },
  button: {
    height: 50,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 15,
    paddingLeft: 20,
  }
});
