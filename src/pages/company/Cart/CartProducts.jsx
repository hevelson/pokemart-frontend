import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { setCartItem, removeCartItem } from '../../../store/cart/actions';
import { stringPrice } from '../../../lib/utils';
import ButtonBasic from '../../../components/ButtonBasic';

const CartProducts = () => {
  const dispatch = useDispatch();
  const { itens } = useSelector(state => state.cart);

  const updateQuantity = (product, qtd) => {
    dispatch(setCartItem({ ...product, qtd }));
  }

  const removeItem = (id) => {
    dispatch(removeCartItem(id));
  }

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
              <ButtonBasic 
                onClick={() => updateQuantity(itens[item], -1)}
                className="btn-small btn-primary"
              >
                <FaMinus />
              </ButtonBasic>
              <div className="current">{qtd}</div>
              <ButtonBasic 
                onClick={() => updateQuantity(itens[item], +1)}
                className="btn-small btn-primary"
              >
                <FaPlus />
              </ButtonBasic>
            </div>
            <ButtonBasic 
              onClick={() => removeItem(id)}
              className="btn-small btn-primary"
            >
              <FaTrashAlt />
            </ButtonBasic>
          </div>
          <div className="prices">
            <p>
              <strong>Valor:</strong>
              <span>{`R$ ${stringPrice(price)}`}</span>
            </p>
            <p>
              <strong>Sub-Total:</strong>
              <span>{`R$ ${stringPrice(price * qtd)}`}</span>
            </p>
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
        <div className="purchase-totals">
          <div className="values">
            <p><span>Sub-total:</span><span>123,45</span></p>
            <p><span>Frete:</span><span>12,34</span></p>
            <p><span><strong>Total:</strong></span><span>135,79</span></p>
          </div>
        </div>
        <div className="checkout-action">
          <Link to="/checkout" className="btn btn-punpkin">Finalizar compra</Link>
        </div>
      </div>
    </section>
  );
}

export default CartProducts;
