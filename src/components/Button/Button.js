import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
// import COLORS from '../../conts/colors';
const Button = ({title, nav, page, params, handleModal}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleModal(false);
        // nav.navigate(page)
      }}
      activeOpacity={0.7}
      style={styles.ButtonStyle}>
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    height: 45,
    width: '100%',
    backgroundColor: '#2D6CDF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  ButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default Button;
