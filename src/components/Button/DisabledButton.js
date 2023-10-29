import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
// import COLORS from '../../conts/colors';
const DisabledButton = ({title, nav, page, params}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(nav.navigate(page))}
      activeOpacity={0.7}
      style={styles.DisabledButtonStyle}>
      <Text style={styles.DisabledButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  DisabledButtonStyle: {
    height: 45,
    width: '100%',
    backgroundColor: '#E4ECFB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  DisabledButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
});
export default DisabledButton;
