import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  StatusBar
} from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from "../../../colors"

const SignUp  = ({ navigation }) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true
  });

  const textInputChange = (val) => {
    if( val.length !== 0 ) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false
      });
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val
    });
  }

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={colors.emerald} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <Feather
            name="user"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ?
          <Feather
            name="check-circle"
            color="green"
            size={20}
          />
          : null}
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ?
            <Feather
              name="eye-off"
              color="grey"
              size={20}
            />
            :
            <Feather
              name="eye"
              color="grey"
              size={20}
            />
            }
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Confirm Your Password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ?
            <Feather
              name="eye-off"
              color="grey"
              size={20}
            />
            :
            <Feather
              name="eye"
              color="grey"
              size={20}
            />
            }
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn, { backgroundColor: colors.emerald }]}
          >
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.signIn, { borderColor: colors.emerald, borderWidth: 1, marginTop: 15 }]}
          >
            <Text style={[styles.textSign, { color: colors.emerald }]}>Sign In</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.emerald,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS ==='ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
