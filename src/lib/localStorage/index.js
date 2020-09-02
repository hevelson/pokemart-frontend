export const setLocalCartItem = (item) => {
  let cart = localStorage.getItem('cart');

  if (!cart) {
    cart = {};
  } else {
    cart = JSON.parse(cart);
  }

  if (cart[`item_${item.id}`]) {
    cart[`item_${item.id}`].qtd += item.qtd;
  } else {
    cart[`item_${item.id}`] = item;
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

  cart[`item_${item.id}`].qtd -= item.qtd;

  if (cart[`item_${item.id}`].qtd < 1) {
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
