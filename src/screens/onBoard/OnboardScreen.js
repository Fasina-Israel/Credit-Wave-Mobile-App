import React from 'react';
import Onboarding from '../../components/OnBoard';
import {data} from './onBoardData';
import {Dimensions, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {auth} from '../../ducks';

const OnboardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(auth.actions.onboardUser(true));
    navigation.navigate('AuthenticationPage', {screen: 'Login'});
  };
  const onRegister = () => {
    dispatch(auth.actions.onboardUser(true));
    navigation.navigate('AuthenticationPage', {screen: 'SignUp'});
  };
  return (
    <Onboarding
      pages={data}
      bottomBarHighlight={false}
      onLogin={onLogin}
      onSignUp={onRegister}
    />
  );
};

export default OnboardScreen;
