import {
  Animated,
  Dimensions,
  FlatList,
  I18nManager,
  StatusBar,
  SafeAreaView,
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import tinycolor from 'tinycolor2';
import Page from './Page';
import Pagination from './Pagination';
import Dot from './Dot';
import TextButton from './buttons/TextButton';

const itemVisibleHotfix = {itemVisiblePercentThreshold: 100};

class Onboarding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      previousPage: null,
      width: null,
      height: Dimensions.get('window').height * 0.65,
      backgroundColorAnim: new Animated.Value(0),
    };
  }

  componentDidUpdate() {
    Animated.timing(this.state.backgroundColorAnim, {
      toValue: 1,
      duration: this.props.transitionAnimationDuration,
      useNativeDriver: false,
    }).start();
  }

  onSwipePageChange = ({viewableItems}) => {
    if (!viewableItems[0] || this.state.currentPage === viewableItems[0].index)
      return;

    this.setState(state => {
      this.props.pageIndexCallback &&
        this.props.pageIndexCallback(viewableItems[0].index);
      return {
        previousPage: state.currentPage,
        currentPage: viewableItems[0].index,
        backgroundColorAnim: new Animated.Value(0),
      };
    });
  };

  goNext = () => {
    this.flatList.scrollToIndex({
      animated: true,
      index:
        I18nManager.isRTL && Platform.OS == 'ios'
          ? this.state.currentPage - 1
          : this.state.currentPage + 1,
    });
  };

  goToPage = (index, animated = true) => {
    this.flatList.scrollToIndex({
      index,
      animated,
    });
  };

  _onLayout = () => {
    const {width, height} = Dimensions.get('window');
    this.setState({width, height: height * 0.65});
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => {
    const {image, title, subtitle, backgroundColor} = item;
    const isLight = tinycolor(backgroundColor).getBrightness() > 180;
    const {
      containerStyles,
      imageContainerStyles,
      allowFontScalingText,
      titleStyles,
      subTitleStyles,
    } = this.props;

    return (
      <Page
        isLight={isLight}
        image={image}
        title={title}
        subtitle={subtitle}
        width={this.state.width || Dimensions.get('window').width}
        height={this.state.height || Dimensions.get('window').height}
        containerStyles={containerStyles}
        imageContainerStyles={imageContainerStyles}
        allowFontScaling={allowFontScalingText}
        titleStyles={Object.assign(
          {},
          titleStyles || {},
          item.titleStyles || {},
        )}
        subTitleStyles={Object.assign(
          {},
          subTitleStyles || {},
          item.subTitleStyles || {},
        )}
      />
    );
  };

  render() {
    const {
      pages,
      alterBottomColor,
      bottomBarHeight,
      bottomBarColor,
      controlStatusBar,
      allowFontScalingButtons,
      flatlistProps,
      skipToPage,
    } = this.props;
    const currentPage = pages[this.state.currentPage];
    const currentBackgroundColor = currentPage.backgroundColor;
    const isLight = tinycolor(currentBackgroundColor).getBrightness() > 180;
    const barStyle = isLight ? 'dark-content' : 'light-content';
    const bottomBarHighlight = this.props.bottomBarHighlight;

    let backgroundColor = currentBackgroundColor;
    if (
      this.state.previousPage !== null &&
      pages[this.state.previousPage] !== undefined
    ) {
      const previousBackgroundColor =
        pages[this.state.previousPage].backgroundColor;
      backgroundColor = this.state.backgroundColorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [previousBackgroundColor, currentBackgroundColor],
      });
    }

    const skipFun =
      skipToPage != null
        ? () => {
            this.flatList.scrollToIndex({
              animated: true,
              index: skipToPage,
            });
          }
        : null;

    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor,
          justifyContent: 'center',
        }}>
        {controlStatusBar && <StatusBar barStyle={barStyle} />}
        <FlatList
          ref={list => {
            this.flatList = list;
          }}
          style={{height: 100}}
          data={pages}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          onViewableItemsChanged={this.onSwipePageChange}
          viewabilityConfig={itemVisibleHotfix}
          initialNumToRender={1}
          extraData={
            this.state.width // ensure that the list re-renders on orientation change
          }
          {...flatlistProps}
        />
        <View
          style={{
            height: Dimensions.get('window').height * 0.2,
          }}>
          <Pagination
            isLight={isLight}
            bottomBarHeight={bottomBarHeight}
            bottomBarColor={bottomBarColor}
            numPages={pages.length}
            currentPage={this.state.currentPage}
            controlStatusBar={controlStatusBar}
            onSkip={skipFun}
            onNext={this.goNext}
            allowFontScaling={allowFontScalingButtons}
          />
        </View>
        <View style={{height: Dimensions.get('window').height * 0.2}}>
          <TextButton textStyle={{fontSize: 24}} onPress={this.props.onLogin}>
            Login
          </TextButton>
          <TextButton textStyle={{fontSize: 24}} onPress={() => {}}>
            SignUp
          </TextButton>
        </View>
      </Animated.View>
    );
  }
}

Onboarding.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      image: PropTypes.element.isRequired,
      title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func,
      ]).isRequired,
      subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    }),
  ).isRequired,
  bottomBarHighlight: PropTypes.bool,
  bottomBarHeight: PropTypes.number,
  bottomBarColor: PropTypes.string,
  controlStatusBar: PropTypes.bool,
  showPagination: PropTypes.bool,
  onSkip: PropTypes.func,
  onDone: PropTypes.func,
  containerStyles: PropTypes.shape({
    style: PropTypes.any,
  }),
  imageContainerStyles: PropTypes.shape({
    style: PropTypes.any,
  }),
  allowFontScalingText: PropTypes.bool,
  allowFontScalingButtons: PropTypes.bool,
  titleStyles: PropTypes.shape({
    style: PropTypes.any,
  }),
  subTitleStyles: PropTypes.shape({
    style: PropTypes.any,
  }),
  transitionAnimationDuration: PropTypes.number,
  skipToPage: PropTypes.number,
  pageIndexCallback: PropTypes.func,
};

Onboarding.defaultProps = {
  bottomBarHighlight: true,
  bottomBarHeight: 60,
  bottomBarColor: 'transparent',
  controlStatusBar: true,
  onSkip: null,
  onDone: null,
  DotComponent: Dot,
  containerStyles: null,
  imageContainerStyles: null,
  allowFontScalingText: true,
  allowFontScalingButtons: true,
  titleStyles: null,
  subTitleStyles: null,
  transitionAnimationDuration: 500,
  skipToPage: null,
  pageIndexCallback: null,
};

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
};

export default Onboarding;
