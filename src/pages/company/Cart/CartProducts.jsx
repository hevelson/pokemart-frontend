import React from 'react';
import { useSelector } from 'react-redux';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';

const CartProducts = () => {

  const { itens } = useSelector(state => state.cart);

  let productRows = [];

  if (itens && Object.keys(itens).length) {
    for (let item in itens) {
      const { id, title, image, price, qtd } = itens[item];
      productRows.push(
        <div className="product-row" key={id}>
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="actions">
            <div className="quantity">
              <button type="button">
                <FaMinus />
              </button>
              <div className="current">{qtd}</div>
              <button type="button">
                <FaPlus />
              </button>
            </div>
            <button type="button">
              <FaTrashAlt />
            </button>
          </div>
          <div className="prices">
            <p>{price}</p>
            <p>Sub-Total: {price * qtd}</p>
          </div>
        </div>
      );
    }
  }

  return(
    <section className="cart-products">
      <div className="container">
        <div className="products-list">
          {productRows}
        </div>
      </div>
    </section>
  );
}

export default CartProducts;
