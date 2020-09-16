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
    case UserActionTypes.USER_LOGOUT: {
      return { 
        ...state, 
        isAuth: false,
        authToken: '',
        user: {
          name: '',
          address: {}
        }
      };
    }
    case UserActionTypes.SET_USER_INFO: {
      const user = JSON.parse(payload);
      return { ...state, user };
    }
    default: {
      return state;
    }
  }
};

export { reducer as userReducer };
