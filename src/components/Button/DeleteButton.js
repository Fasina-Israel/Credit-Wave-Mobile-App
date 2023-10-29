import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
// import COLORS from '../../conts/colors';
const DeleteButton = ({title, nav, page, params, handleModal}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleModal(false);
        nav.navigate(page);
      }}
      activeOpacity={0.7}
      style={styles.DeleteButtonStyle}>
      <Text style={styles.DeleteButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  DeleteButtonStyle: {
    height: 45,
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  DeleteButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
});
export default DeleteButton;
