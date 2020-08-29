import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
import ButtonBasic from '../../../components/ButtonBasic';

import { getProduct } from '../../../services/products';

const ProductDetailPage = () => {
	let { id } = useParams();
	const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
    const getList = async () => {
      try {
				const product = await getProduct(id);
        setProduct(product);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setProduct(null);
      }
    }
    if (loading) {
      getList();
    }
	}, [loading, id]);
	
	const getStringPrice = (product) => {
		const { price } = product;
		const stringPrice = parseFloat(price).toLocaleString('pt-br', {minimumFractionDigits: 2});
		return `R$ ${stringPrice}`;
	}

	return(
		<main className="product-detail-page">
			<NavHeader />
			<div className="container">
				{
					!loading && product !== null &&
					(
						<section className="product-detail">
							<div className="product-image">
								<img src={product.image} alt={product.title} />
							</div>
							<div className="produt-description">
								<h1>{product.title} - cod.{product.id}</h1>
								<p>{product.description}</p>
								<ul className="tags">
									{product.types.map((type, key) => {
										return(
											<li key={key}>{type}</li>
										);
									})}
								</ul>
								<div className="product-price">
									<div className="prices">
										{getStringPrice(product)}
									</div>
									<ButtonBasic type="button" className="btn-royal-blue">Comprar</ButtonBasic>
								</div>
							</div>
						</section>
					)
				}
			</div>
			<Footer />
		</main>
	);
}

export default ProductDetailPage;
