import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../../../colors';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PushSetting')}
        >
          <Text style={styles.btnText}>푸시 알림</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Language')}
        >
          <Text style={styles.btnText}>언어</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Help')}
        >
          <Text style={styles.btnText}>서비스 도움말</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("로그아웃 하시겠습니까?")}
        >
          <Text style={styles.btnText}>SignOut</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("계정을 삭제하시겠습니까?")}
        >
          <Text style={styles.btnText}>Clubleague 탈퇴</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


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
