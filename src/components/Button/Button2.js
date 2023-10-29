import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

// import COLORS from '../../conts/colors';
const Button2 = ({nav, title, imagePath, onPress, params}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.Button2Style}>
      <Image source={imagePath} />
      <Text style={styles.Button2Text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Button2Style: {
    height: 45,
    width: '100%',
    backgroundColor: '#fff',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#bfbfbf',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  Button2Text: {
    color: '#272727',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default Button2;
