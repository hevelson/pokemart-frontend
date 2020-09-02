export const stringPrice = (price) => {
  price = parseFloat(price);

  if (isNaN(price)) {
    price = 0;
  }

  return parseFloat(price).toLocaleString('pt-br', {minimumFractionDigits: 2})
};
