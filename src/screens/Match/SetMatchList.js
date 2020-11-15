import React, { Component } from 'react';
import { View, FlatList, ScrollView, TouchableOpacity,Button, Text, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';

import SelectListItem from "../../components/items/SelectListItem";
import clubplayers from "../../data/clubplayers";


function SetMatchList({ navigation, route }) {

  const [postText, setPostText] = React.useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('GameMatch', { post: postText })} title="Submit">
          <Feather name="check" size={25} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    }, [navigation, setPostText]);
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.clBackgroundColor }}>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
      title="Done"
      onPress={() => {
        // Pass params back to home screen
        navigation.navigate('GameMatch', { post: postText });
      }}
    />
      <FlatList
        data={clubplayers}
        renderItem={({item}) =>
          <SelectListItem
            onPress={() => navigation.navigate('GameMatch')}
            avatar={item.avatar}
            user={item.user}
            area={item.area}
          />
        }
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default SetMatchList;
