import { CartActionTypes } from './types';
import { setLocalCartItem, removeLocalCartItem, getLocalCart } from '../../lib/localStorage';

export const setCartItem = (item) => {
  setLocalCartItem(item);
  return { action: CartActionTypes.SET_CART_ITEM, payload: { item } };
};
export const setRemoveCartItem = (itemKey) => {
  removeLocalCartItem(itemKey)
  return { action: CartActionTypes.REMOVE_CART_ITEM, payload: { itemKey } };
};
export const loadLocalCart = () => {
  const itens = getLocalCart();
  return { action: CartActionTypes.LOAD_LOCAL_CART, payload: { itens }}
};
