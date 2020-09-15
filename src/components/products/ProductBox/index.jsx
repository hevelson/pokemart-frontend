import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setCartItem } from '../../../store/cart/actions';
import ButtonBasic from '../../ButtonBasic';

const ProductBox = (props) => {
  const dispatch = useDispatch();
  const { id, title, image, price } = props;
  const [showCartMessage, setShowCartMessage] = useState(false);
  let messageTimeout = null;

  const stringPrice = parseFloat(price).toLocaleString('pt-br', {minimumFractionDigits: 2});
  const addTocart = () => {
    dispatch(setCartItem({
      id,
      qtd: 1,
      title,
      image,
      price
    }));
    setShowCartMessage(true);
    messageTimeout = setTimeout(() => {
      setShowCartMessage(false);
    }, 2300);
  }

  useEffect(() => {
    return () => {
      clearTimeout(messageTimeout);
    }
  }, [messageTimeout]);

  return (
    <div className="product-box">
      <div className={`cart-message ${showCartMessage && 'show'}`}>
        Produto adicionado ao carrinho
      </div>
      <picture>
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </picture>
      <h2>
        <Link to={`/product/${id}`}>
          {title}
        </Link>
      </h2>
      <div className="info-box">
        <div className="price">R$ {stringPrice}</div>
      </div>
      <div className="actions">
        <ButtonBasic 
          className="btn-royal-blue"
          onClick={addTocart}
        >
          Comprar
        </ButtonBasic>
      </div>
    </div>
  );
};

export default ProductBox;
