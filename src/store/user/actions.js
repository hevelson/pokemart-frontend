import { UserActionTypes } from './types';

export const setAuthToken = (token) => {
  return { type: UserActionTypes.SET_AUTH_TOKEN, payload: token };
};
export const userLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userInfo');
  return { type: UserActionTypes.USER_LOGOUT };
};
export const setUserInfo = (userInfo) => {
  return { type: UserActionTypes.SET_USER_INFO, payload: userInfo };
};
