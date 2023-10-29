import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
// import COLORS from '../../conts/colors';
const Button = ({title, nav, page, params}) => {
  return (
    <TouchableOpacity
      onPress={() => nav.navigate(page)}
      activeOpacity={0.7}
      style={styles.LandingPageButton3Style}>
      <Text style={styles.LandingPageButton3Text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  LandingPageButton3Style: {
    height: 45,
    width: '100%',
    backgroundColor: '#2D6CDF',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  LandingPageButton3Text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default Button;
