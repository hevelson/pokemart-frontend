export const setLocalCartItem = (item) => {
  let cart = localStorage.getItem('cart');

  if (!cart) {
    cart = {};
  } else {
    cart = JSON.parse(cart);
  }

  if (cart[`item_${item.id}`]) {
    const { qtd } = cart[`item_${item.id}`];
    cart[`item_${item.id}`].qtd = Math.max(qtd + item.qtd, 1);
  } else {
    cart[`item_${item.id}`] = item;
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  return cart;
}

export const removeLocalCartItem = (itemKey) => {
  let cart = localStorage.getItem('cart');

  if (!cart) {
    return {};
  }
  
  cart = JSON.parse(cart);

  if (!cart[`item_${itemKey}`]) {
    console.log({itemKey});
    console.log(cart[`item_${itemKey}`]);
    return cart;
  }

  delete cart[`item_${itemKey}`];

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
