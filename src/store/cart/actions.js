import { CartActionTypes } from './types';
import { setLocalCartItem, removeLocalCartItem, getLocalCart, clearLocalCart } from '../../lib/localStorage';

export const setCartItem = (item) => {
  const itens = setLocalCartItem(item);
  return { type: CartActionTypes.UPDATE_CART_ITENS, payload: itens };
};
export const removeCartItem = (itemKey) => {
  const itens = removeLocalCartItem(itemKey);
  return { type: CartActionTypes.UPDATE_CART_ITENS, payload: itens };
};
export const clearCart = () => {
  clearLocalCart();
  return { type: CartActionTypes.CLEAR_CART };
};
export const loadLocalCart = () => {
  const itens = getLocalCart();
  return { type: CartActionTypes.LOAD_LOCAL_CART, payload: { itens }}
};
