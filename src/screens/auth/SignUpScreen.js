import { useTheme } from "@react-navigation/native";
// import {createStackNavigator} from '@react-navigation/stack';
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";

const RegisterScreen = ({ navigation }) => {
  const [emailError, setEmailError] = useState("");
  const [errorBorder, setErrorBorder] = useState(false);
  const [companyNameError, setCompanyNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [inputs, setInputs] = React.useState({
    email: "",
    companyName: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  useEffect(() => {
    return () => {
      setErrorBorder(false);
      setCompanyNameError("");
      setEmailError("");
      setPasswordError("");
      setDisableButton(false);
    };
  }, [inputs]);

  const handleRegister = (text) => {
    // const email = inputs.email.replace(/(^\w+:|^)\/\//, "").replace("www.", "");
    if (inputs.companyName.trim() === "") {
      setCompanyNameError("Company’s name cannot be empty");
      setErrorBorder(true);
    } else if (inputs.companyName.length < 3) {
      setCompanyNameError("Text must be at least 3 characters long.");
      setErrorBorder(true);
    } else {
      // Clear the error message if validation passes
      setCompanyNameError("");

      // Handle your form submission here
    }
    if (inputs.email.trim() === "") {
      setEmailError("Email cannot be empty");
      setErrorBorder(true);
    } else if (inputs.email.length < 10) {
      setEmailError("Please input a valid url");
      setErrorBorder(true);
    } else {
      // Clear the error message if validation passes
      setEmailError("");

      // Handle your form submission here
    }
    if (inputs.password.trim() === "") {
      setPasswordError("Password cannot be empty");
      setErrorBorder(true);
      setDisableButton(true);
    } else if (inputs.password.length < 3) {
      setPasswordError("Password must be at least 8 characters long.");
      setErrorBorder(true);
    } else {
      // Clear the error message if validation passes
      setPasswordError("");

      // Handle your form submission her
    }
    if (
      inputs.companyName.trim() === "" &&
      inputs.email.trim() === "" &&
      inputs.password.trim() === ""
    ) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputs),
    };
    console.log(inputs, "inputsuccesful");
  };

  return (
    <View style={styles.content}>
      <View style={styles.headers}>
        <Text style={styles.headerText}>Create your CreditWave account</Text>
        <Text style={styles.subHeaderText}>
          Let’s introduce. Enter your details as they appear on your legal
          documents.
        </Text>
      </View>
      <Text style={[styles.label]}>First Name</Text>
      <TextInput
        onChangeText={(text) => handleOnchange(text, "companyName")}
        placeholder="Timesage"
        style={
          companyNameError && errorBorder ? styles.errorInput : styles.input
        }
        placeholderTextColor={"#F3F3F3"}
      />
      {companyNameError && (
        <Text style={styles.errorMessage}>{companyNameError}</Text>
      )}
      <Text style={[styles.label]}>Last Name</Text>
      <TextInput
        onChangeText={(text) => handleOnchange(text, "email")}
        placeholder="johndoe@gmail.com"
        style={emailError && errorBorder ? styles.errorInput : styles.input}
        placeholderTextColor={"#F3F3F3"}
      />
      {emailError && <Text style={styles.errorMessage}>{emailError}</Text>}
      <View style={styles.inputField}>
        <Text style={[styles.label]}>Email Address</Text>
        <TextInput
          onChangeText={(text) => handleOnchange(text, "password")}
          placeholder="Password"
          secureTextEntry={visible ? false : true}
          style={
            passwordError && errorBorder ? styles.errorInput : styles.input
          }
          placeholderTextColor={"#F3F3F3"}
        />
        {passwordError && (
          <Text style={styles.errorMessage}>{passwordError}</Text>
        )}
      </View>
      <View style={styles.inputField}>
        <Text style={[styles.label]}>Phone Number</Text>
        <TextInput
          onChangeText={(text) => handleOnchange(text, "password")}
          placeholder="Password"
          secureTextEntry={visible ? false : true}
          style={
            passwordError && errorBorder ? styles.errorInput : styles.input
          }
          placeholderTextColor={"#F3F3F3"}
        />
        {passwordError && (
          <Text style={styles.errorMessage}>{passwordError}</Text>
        )}
      </View>
      <View>
        <Text style={{ padding: 10, color: "#A7A7A7" }}>
          By clicking continue, you agree to our Terms and condition
        </Text>
      </View>
      {disableButton ? (
        <Button
          mode="contained"
          // onPress={() => handleRegister()}
          style={styles.disabledButton}
        >
          <Text style={styles.btnText}> Continue </Text>
        </Button>
      ) : (
        <Button
          mode="contained"
          onPress={() => handleRegister()}
          style={styles.button}
        >
          <Text style={styles.btnText}> Continue </Text>
        </Button>
      )}

      {/* <Divider /> */}

      <View style={styles.footer}>
        <View style={styles.footer1}>
          <Text style={styles.footerText}>Already have an account ?</Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.login}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headers: {
    paddingVertical: 20,
    marginTop: 50,
    gap: 7,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "800",
  },
  subHeaderText: {
    fontSize: 14,
    color: "#A7A7A7",
    // width: 200,
  },
  inputField: {
    position: "relative",
  },
  errorMessage: {
    color: "#c71d32",
    fontSize: 15,
    marginTop: -10,
    marginLeft: 5,
    fontFamily: "satoshi",
    height: 25,
  },
  footerText: {
    color: "#6f6f6f",
  },
  eyeIcon: {
    position: "relative",
    left: 330,
    right: 10,
    bottom: 50,
    zIndex: 10,
  },
  btnText: {
    fontSize: 16,
  },
  arrowIcon: {
    position: "absolute",
    top: 20,
  },
  apple: {
    position: "absolute",
    bottom: 13,
    left: 90,
    zIndex: 10,
  },
  googleIcon: {
    top: 28,
    left: 90,
    zIndex: 10,
  },
  mobile: {
    top: 28,
    left: 90,
    zIndex: 10,
  },
  buttonText: {
    fontFamily: "satoshi",
    fontWeight: "700",
  },
  checkBoxField: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: 320,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkBox: {
    width: 20,
    cursor: "pointer",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  phoneNumberInput: {
    display: "flex",
    flexDirection: "row",
  },
  phoneNumberStyle: {
    width: 270,
    margin: 8,
    marginTop: 3,
    padding: 10,
    paddingTop: 5,
    borderRadius: 5,
    borderWidth: 1.55,
    borderColor: "rgba(0, 0, 0, 0.08)",
  },
  input: {
    margin: 2,
    marginBottom: 10,
    padding: 7,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#E9E9E9",
    fontSize: 16,
    position: "relative",
    fontFamily: "satoshi",
  },
  errorInput: {
    margin: 2,
    marginBottom: 10,
    padding: 7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c71d32",
    fontSize: 16,
    position: "relative",
  },
  button: {
    margin: 0,
    backgroundColor: "#155E56",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  disabledButton: {
    margin: 0,
    backgroundColor: "#E4ECFB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    margin: 8,
  },
  text2: {
    color: "#000",
  },
  label: {
    fontSize: 15,
    paddingLeft: 5,
    marginTop: 5,
    color: "#A7A7A7",
    fontWeight: "600",
    fontFamily: "satoshi",
  },
  button2: {
    margin: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#bfbfbf",
    borderWidth: 1,
    color: "#000",
    fontFamily: "satoshi",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    width: 300,
    gap: 10,
  },
  footer1: {
    width: 200,
    textAlign: "center",
  },
  login: {
    color: "#155E56",
    fontWeight: "600",
  },
});

export default RegisterScreen;

// import {AppRegistry} from 'react-native';
// import React from 'react';
// import App from './App';
// import {name as appName} from './app.json';
// import {Provider} from 'react-redux';
// import {configureStore} from '@reduxjs/toolkit';
// import reducer from './src/store/reducer';

// const store = configureStore({reducer});
// AppRegistry.registerComponent(appName, () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// ));
