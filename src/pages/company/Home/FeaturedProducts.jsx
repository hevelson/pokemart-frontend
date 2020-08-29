import React, { useState, useEffect } from 'react';

import ProductBox from '../../../components/products/ProductBox';
import { getProducts } from '../../../services/products';

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      try {
        const products = await getProducts(1);
        setLoading(false);
        setProducts(products.list);
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
    const { id, title, price } = product;
    return(
      <ProductBox
        id={id}
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
