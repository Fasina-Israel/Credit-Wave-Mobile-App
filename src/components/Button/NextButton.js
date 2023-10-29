import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
// import COLORS from '../../conts/colors';
const NextButton = ({ nav, title, page, params }) => {
  return (
    <Button
      onPress={() => console.log(nav.navigate(page))}
      activeOpacity={0.7}
      style={styles.LandingPageButton2Style}
    >
      <Text style={styles.LandingPageButton2Text}>{title}</Text>
    </Button>
  );
};
const styles = StyleSheet.create({
  LandingPageButton2Style: {
    height: 50,
    width: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    // borderColor: "#155E56",
    // borderWidth: 2,
    color: "white",
  },
  LandingPageButton2Text: {
    color: "#000",
    fontWeight: "700",
    fontSize: 20,
    
  },
});

export default NextButton;
