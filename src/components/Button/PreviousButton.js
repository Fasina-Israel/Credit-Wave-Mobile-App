import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
// import COLORS from '../../conts/colors';
const PreviousButton = ({ title, nav, page, params }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(nav.navigate(page))}
      activeOpacity={0.7}
      style={styles.LandingPageButton2Style}
    >
      <Text style={styles.LandingPageButton2Text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    LandingPageButton2Style: {
        height: 50,
        width: 50,
        backgroundColor: "#fff",
        // marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        // borderColor: "#155E56",
        // borderWidth: 2,
        color: "white",
      },
      LandingPageButton2Text: {
        color: "#155E56",
        fontWeight: "700",
        fontSize: 20,
      },
});
export default PreviousButton;
