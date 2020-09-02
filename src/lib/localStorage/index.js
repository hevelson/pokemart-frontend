export const setLocalCartItem = (item) => {
  let cart = localStorage.getItem('cart');

  if (!cart) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }

  cart.push(item);

  localStorage.setItem('cart', JSON.stringify(cart));

  return cart;
}

export const removeLocalCartItem = (itemKey) => {
  let cart = localStorage.getItem('cart');

  if (!cart) {
    return [];
  }
  
  cart = JSON.parse(cart);
  cart.splice(itemKey, 1);

  localStorage.setItem('cart', JSON.stringify(cart));

  return cart;
}

export const getLocalCart = () => {
  let cart = localStorage.getItem('cart');

  if (!cart) {
    return [];
  }
  
  cart = JSON.parse(cart);

  return cart;
}
