import React from 'react';
import { Link } from 'react-router-dom';
import ButtonBasic from '../../ButtonBasic';

const ProductBox = (props) => {
  const { id, title, image, price } = props;

  const stringPrice = parseFloat(price).toLocaleString('pt-br', {minimumFractionDigits: 2});

  return (
    <div className="product-box">
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
        <ButtonBasic className="btn-royal-blue">Comprar</ButtonBasic>
      </div>
    </div>
  );
};

export default ProductBox;
