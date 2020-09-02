export const setLocalCartItem = (item) => {
  let cart = localStorage.getItem('cart');

  if (!cart) {
    cart = {};
  } else {
    cart = JSON.parse(cart);
  }

  if (cart[`item_${item.id}`]) {
    cart[`item_${item.id}`] += item.qtd;
  } else {
    cart[`item_${item.id}`] = item.qtd;
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  return cart;
}

export const removeLocalCartItem = (item) => {
  let cart = localStorage.getItem('cart');

  if (!cart) {
    return {};
  }
  
  cart = JSON.parse(cart);
  if (!cart[`item_${item.id}`]) {
    return cart;
  }

  cart[`item_${item.id}`] -= item.qtd;

  if (cart[`item_${item.id}`] < 1) {
    delete cart[`item_${item.id}`];
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  return cart;
}

export const getLocalCart = () => {
  let cart = localStorage.getItem('cart');

  if (!cart) {
    return {};
  }
  
  cart = JSON.parse(cart);

  return cart;
}
