import {namespace} from './auth.slice';

const isUserOnboard = state => state.auth.onBoarded;
const getToken = state => state.auth.userToken;
const isLoggedOut = state => state.auth.isLoggedOut;

export default {
  isUserOnboard,
  getToken,
  isLoggedOut,
};
