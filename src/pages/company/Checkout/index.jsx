import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { stringPrice } from '../../../lib/utils';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';

const CheckoutPage = () => {
  const { itens } = useSelector(state => state.cart);
  const [paymentMethod, setPaymentMethod] = useState('');

  let productRows = [];
  let purchaseTotal = 0;
  let postPrice = 0;
  
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
		<main className="checkout-page">
			<NavHeader />
      <div className="container">
        <div className="checkout-columns">
          <section className="address">
            <h2>Endereço</h2>
            <div className="selected-address">
              <p className="street">Rua: Virgilio de Rezende, 390</p>
              <p className="neighborhood">Centro</p>
              <p className="city-state">Itapetininga/SP</p>
              <p className="post-code">18200-500</p>
            </div>
          </section>
          <section className="payment">
            <h2>Pagamento</h2>
            <div className="select-payment form-group">
              <label htmlFor="paymentMethod">Forma de pagemento</label>
              <select 
                name="paymentMethod" 
                value={paymentMethod}
                onChange={ e => setPaymentMethod(e.target.value)}
                className="form-input"
              >
                <option value="">Selecione</option>
                <option value="creditCard">Cartão de crédito</option>
                <option value="bankSlip">Boleto bancário</option>
              </select>
            </div>
          </section>
          <section className="totals">
            <h2>Resumo</h2>
            <div className="products">
              { productRows }
            </div>
            <div className="subtotal">
              Sub-total: {`R$ ${stringPrice(purchaseTotal)}`}
            </div>
            <div className="post-price">
              Frete: {`R$ ${stringPrice(postPrice)}`}
            </div>
            <div className="total">
              Total: {`R$ ${stringPrice(purchaseTotal + postPrice)}`}
            </div>
          </section>
        </div>
      </div>
			<Footer />
		</main>
	);
}

export default CheckoutPage;
