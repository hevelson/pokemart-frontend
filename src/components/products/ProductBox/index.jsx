import React from 'react';
import ButtonBasic from '../../ButtonBasic';

const ProductBox = (props) => {
  const { title, image, price } = props;

  const stringPrice = parseFloat(price).toLocaleString('pt-br', {minimumFractionDigits: 2});

  return (
    <div className="product-box">
      <picture>
        <img src={image} alt={title} />
      </picture>
      <h2>{title}</h2>
      <div className="info-box">
        <div className="price">R$ {stringPrice}</div>
      </div>
      <div className="actions">
        <ButtonBasic className="btn-royal-blue">Comprar</ButtonBasic>
      </div>
    </div>
  );
};

export default ProductBox;
