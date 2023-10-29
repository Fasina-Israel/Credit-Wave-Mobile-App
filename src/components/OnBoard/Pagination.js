import {View, StatusBar, I18nManager, Platform} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Dots from './Dots';
import Dot from './Dot';

const Pagination = ({
  numPages,
  currentPage,
  isLight,
  bottomBarHeight,
  bottomBarColor,
  controlStatusBar,
  allowFontScaling,
}) => {
  const isLastPage =
    I18nManager.isRTL && Platform.OS == 'ios'
      ? currentPage === 0
      : currentPage + 1 === numPages;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: bottomBarColor,
        ...styles.container,
      }}>
      <Dots
        isLight={isLight}
        numPages={numPages}
        currentPage={currentPage}
        Dot={Dot}
        style={styles.dots}
      />
    </View>
  );
};

Pagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  isLight: PropTypes.bool.isRequired,
  bottomBarHeight: PropTypes.number.isRequired,
  bottomBarColor: PropTypes.string.isRequired,
  allowFontScaling: PropTypes.bool,
};

const styles = {
  container: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },

  dots: {
    flexShrink: 0,
  },
};

export default Pagination;
