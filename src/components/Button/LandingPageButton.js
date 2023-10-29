import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
// import COLORS from '../../conts/colors';
const LandingPageButton = ({ title, nav, page, params }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(nav.navigate('SignUp'))}
      activeOpacity={0.7}
      style={styles.LandingPageButtonStyle}
    >
      <Text style={styles.LandingPageButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  LandingPageButtonStyle: {
    height: 45,
    width: 350,
    backgroundColor: "#fff",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#155E56",
    borderWidth: 1,
    paddingBottom: 0,
    color: "#155E56",
  },
  LandingPageButtonText: {
    color: "#155E56",
    fontWeight: "500",
    fontSize: 16,
  },
});
export default LandingPageButton;
