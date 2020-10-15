import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, Button } from "react-native";
import colors from '../../../colors';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imgWrap}>
          <TouchableOpacity
            onPress={() => alert("edit img")}
          >
            <Image
              source={require('../../data/ImgTest/aaaa.jpg')}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textName}>클럽 이름</Text>
          <TextInput
            placeholder="Club Name"
            style={{ paddingLeft: 15 }}
          />
        </View>

        <View>
          <Text style={styles.textName}>클럽 소개글</Text>
          <TextInput
            placeholder="Introduce your club"
            style={{ paddingLeft: 15 }}
          />
        </View>

        <View style={styles.btnWrap}>
          <TouchableOpacity
            onPress={() => {
              // Pass params back to Profile screen
              navigation.navigate('Details', { post: postText });
            }}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Done</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: colors.clBackgroundColor,
   paddingTop: 10,
  },
  imgWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  textName: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
  },
  btnWrap: {
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    width: 100,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blueColor,
    marginTop: 50,
  },
  btnText: {
    color: colors.white
  },
});
