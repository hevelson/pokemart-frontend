import React, { useState, useEffect } from 'react';

import ProductBox from '../../../components/products/ProductBox';
import { getProducts } from '../../../services/products';

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      try {
        const products = await getProducts();
        setLoading(false);
        setProducts(products);
      } catch (error) {
        setLoading(false);
        setProducts([]);
      }
    }
    if (loading) {
      getList();
    }
  }, [loading]);

  let productBoxes = products.map((product, key) => {
    const { id, nome, preco } = product;
    return(
      <ProductBox
        id={id}
        key={key} 
        title={nome}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        price={preco}
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
