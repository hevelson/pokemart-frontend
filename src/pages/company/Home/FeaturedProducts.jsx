import React from 'react';

import ProductBox from '../../../components/products/ProductBox';

const FeaturedProducts = () => {

  const products = [
    {
      id : 3,
      title : "Venusaur",
      price : 397.00,
    },
    {
      id : 6,
      title : "Charizard",
      price : 211.00,
    },
    {
      id : 9,
      title : "Blastoise",
      price : 118.00,
    },
    {
      id : 12,
      title : "Butterfree",
      price : 47.00,
    },
    {
      id : 15,
      title : "Beedrill",
      price : 294.00,
    },
    {
      id : 18,
      title : "ideot",
      price : 282.00,
    },
    {
      id : 20,
      title : "Raticate",
      price : 230.00,
    },
    {
      id : 22,
      title : "Fearow",
      price : 485.00,
    },
    {
      id : 25,
      title : "Pikachu",
      price : 171.00,
    },
    {
      id : 12,
      title : "Butterfree",
      price : 47.00,
    },
    {
      id : 17,
      title : "Pidgeotto",
      price : 430.00,
    },
    {
      id : 27,
      title : "Sandshrew",
      price : 17.00,
    },
  ];

  let productBoxes = products.map((product, key) => {
    const { id, title, price } = product;
    return(
      <ProductBox
        key={key} 
        title={title}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        price={price}
      />
    );
  });

  return(
    <section className="featured-products">
      <div className="container">
        <div className="products-list">
          {productBoxes}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
