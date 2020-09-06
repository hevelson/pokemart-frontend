import { combineReducers } from 'redux';

import { cartReducer } from './cart/reducer';

export const createRootReducer = () =>
  combineReducers({
    cart: cartReducer,
  });