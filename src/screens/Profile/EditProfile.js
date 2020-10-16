import * as React from 'react';
import { StyleSheet, Text, Button, TextInput, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';
import TextInputField from "../../components/form/TextInputField";

function EditProfile({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile'), { post: postText }}
          title="Submit"
        >
          <Feather name="check" size={25} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    })
  }, [navigation], postText);

  return (
    <>
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
                source={require('../../data/ImgTest/dddd.jpg')}
                style={styles.avatar}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.textWrap}>
            <TextInputField labelText="Username" placeholder="Username" value={postText} onChange={setPostText} />
            <TextInputField labelText="Name" placeholder="Name" value={postText} onChange={setPostText} />
            <TextInputField labelText="Area" placeholder="Area" value={postText} onChange={setPostText} />
            <TextInputField labelText="Position" placeholder="Position" value={postText} onChange={setPostText} />
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
    </>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
  imgWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  textWrap: {
    padding: 20,
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
  },
  btnText: {
    color: colors.white
  },
});
