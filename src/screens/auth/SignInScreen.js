import {useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from './signInStyle';
import Fingerprint from '../../components/FingerPrint/FingerPrint';
import CreditWave from '../../assets/spalsh/CreditWaveLogo';

const LoginScreen = ({navigation}) => {
  const [error, setError] = useState({emailErr: '', passwordErr: ''});
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  const [visible, setVisible] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  const handleOnchange = (text, input) => {
    validate(input, text);
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const validate = (check, value) => {
    switch (check) {
      case 'email':
        {
          let emailRegex =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
          const isvalidEmail = String(value).toLowerCase().match(emailRegex);
          setError(error => ({...error, emailErr: !isvalidEmail}));
        }
        break;
      case 'password': {
        const isValidPassword = String(value).match(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        );
        setError(error => ({...error, passwordErr: !isValidPassword}));
      }
      default:
        break;
    }
  };

  const {emailErr, passwordErr} = error;
  return (
    <KeyboardAvoidingView style={styles.content} behavior="padding">
      <View style={styles.Logo}>
        <CreditWave />
      </View>
      <View style={styles.headers}>
        <Text style={styles.headerText}>Welcome back</Text>
        <Text style={styles.subHeaderText}>Log into your account</Text>
      </View>

      <View style={styles.inputField}>
        <Text style={[styles.label]}>Email Address</Text>
        <TextInput
          onChangeText={text => handleOnchange(text, 'email')}
          placeholder="Email address"
          style={[styles.input, emailErr && styles.errorInput]}
          placeholderTextColor={'#F3F3F3'}
        />
        {emailErr && <Text style={styles.errorMessage}>email is invalid.</Text>}
      </View>

      <View style={styles.inputField}>
        <Text style={[styles.label, styles.password]}>Password</Text>
        <View style={{position: 'relative'}}>
          <TextInput
            onChangeText={text => handleOnchange(text, 'password')}
            placeholder="Password"
            secureTextEntry={visible ? false : true}
            style={[styles.input, passwordErr && styles.errorInput]}
            placeholderTextColor={'#F3F3F3'}
          />
          {passwordErr && (
            <Text style={styles.errorMessage}>
              password must be 8 character long and must contain at one special
              character
            </Text>
          )}
          <View style={styles.eyeIcon}>
            <Pressable onPress={togglePasswordVisibility}>
              <Image
                source={
                  visible
                    ? require('../../assets/icons/icons/eye-slash.png')
                    : require('../../assets/icons/icons/eyeicon.png')
                }
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Button
        mode="contained"
        disabled={true}
        style={[styles.button, disableButton && styles.disabledButton]}>
        <Text style={styles.btnText}> Continue </Text>
      </Button>

      <View style={styles.footer}>
        <View style={styles.footer1}>
          <Text style={styles.footerText}>Don't have an account ?</Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.login}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Fingerprint />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
