import React from 'react';
import { useSelector } from 'react-redux';

import { stringPrice } from '../../../lib/utils';
import ButtonBasic from '../../../components/ButtonBasic';

const PurchaseSummary = ({ postPrice, finish }) => {
  const { itens } = useSelector(state => state.cart);

  let productRows = [];
  let purchaseTotal = 0;
  
  if (itens && Object.keys(itens).length) {
    for (let item in itens) {
      const { id, title, image, price, qtd } = itens[item];
      purchaseTotal += price * qtd;
      productRows.push(
        <div className="product-row" key={id}>
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="price">
            <div>{`R$ ${stringPrice(price)}`}</div>
            <div>x{qtd}</div>
            <div>{`R$ ${stringPrice(price * qtd)}`}</div>
          </div>
        </div>
      );
    }
  }

  return(
    <section className="purchase-summary">
      <h2>Resumo</h2>
      <div className="products">
        { productRows }
      </div>
      <div className="values">
        <div className="subtotal">
          <span>Sub-total:</span>
          <span>{`R$ ${stringPrice(purchaseTotal)}`}</span>
        </div>
        <div className="post-price">
          <span>Frete:</span>
          <span>{`R$ ${stringPrice(postPrice)}`}</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>{`R$ ${stringPrice(purchaseTotal + postPrice)}`}</span>
        </div>
      </div>
      <div className="finish">
        <ButtonBasic onClick={finish} type="submit">Finalizar compra</ButtonBasic>
      </div>
    </section>
  )
}

export default PurchaseSummary;
