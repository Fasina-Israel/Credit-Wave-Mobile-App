import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  userObj: {},
  userToken: undefined,
  isLoggedOut: false,
  onBoarded: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{userObj: any}>) {
      const {userObj} = action.payload;
      return {...state, userObj};
    },
    onboardUser(state, action: PayloadAction<boolean>) {
      state.onBoarded = action.payload;
    },
  },
});

const {onboardUser} = auth.actions;

export const actions = {onboardUser};

export const namespace = auth.name;

export const reducer = auth.reducer;
