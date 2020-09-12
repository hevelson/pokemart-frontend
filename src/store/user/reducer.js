import { UserActionTypes } from './types';

const initialState = {
  isAuth: false,
  authToken: '',
  user: {
    name: '',
    address: {}
  }
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionTypes.SET_AUTH_TOKEN: {
      return { ...state, authToken: payload, isAuth: true };
    }
    case UserActionTypes.REMOVE_AUTH_TOKEN: {
      return { ...state, authToken: '', isAuth: false };
    }
    case UserActionTypes.SET_USER_INFO: {
      return { ...state, user: payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as userReducer };
