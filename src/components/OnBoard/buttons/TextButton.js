import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const TextButton = ({
  onPress,
  textStyle,
  allowFontScaling,
  style,
  children,
}) => {
  const [textColor, setcolor] = useState('#000');
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPressIn={() => setcolor('#fff')}
        onPressOut={() => setcolor('#000')}
        underlayColor="green"
        style={[styles.button]}
        onPress={onPress}
        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}>
        <Text
          allowFontScaling={allowFontScaling}
          style={[{...textStyle}, {color: textColor}]}>
          {children}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

TextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  textStyle: PropTypes.shape({
    style: PropTypes.any,
  }),
  allowFontScaling: PropTypes.bool,
};

TextButton.defaultProps = {
  textStyle: null,
  allowFontScaling: true,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  button: {
    height: 40,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 4,
    fontWeight: 600,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default TextButton;
