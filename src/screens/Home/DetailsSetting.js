import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../../../colors';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DtBasicInfo')}
        >
          <Text style={styles.btnText}>Club 기본정보관리 - 클럽 이름 및 소개글 설정</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DtJoinQuestion')}
        >
          <Text style={styles.btnText}>Member 활동관리 - 가입신청/질문 설정</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DtJoinQualification')}
        >
          <Text style={styles.btnText}>Member 활동관리 - 가입조건 설정</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DtForcedWithdrawal')}
        >
          <Text style={styles.btnText}>Member 활동관리 - 강제탈퇴</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DtCoLeader')}
        >
          <Text style={styles.btnText}>Management 설정 - 공동리더</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DtEmpowerment')}
        >
          <Text style={styles.btnText}>Management 설정 - 리더위임</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("클럽을 삭제하시겠습니까? 삭제 후에는 복구가 불가능합니다.")}
        >
          <Text style={styles.btnText}>Club 삭제</Text>
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
