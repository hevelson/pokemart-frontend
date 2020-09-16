import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setCartItem } from '../../../store/cart/actions';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
import ButtonBasic from '../../../components/ButtonBasic';

import { getProduct } from '../../../services/products';

const ProductDetailPage = () => {
	const dispatch = useDispatch();
	let { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [showCartMessage, setShowCartMessage] = useState(false);
	let messageTimeout = null;

	const addTocart = () => {
    dispatch(setCartItem({
      id: product.id,
      qtd: 1,
      title: product.nome,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${product.id}.png`,
      price: product.preco
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
		const { preco } = product;
		const stringPrice = parseFloat(preco).toLocaleString('pt-br', {minimumFractionDigits: 2});
		return `R$ ${stringPrice}`;
	}
	const getStringWeight = (product) => {
		const { peso } = product;
		const stringWeight = parseFloat(peso).toLocaleString('pt-br', {minimumFractionDigits: 2});
		return `${stringWeight} Kg`;
	}

	return(
		<main className="product-detail-page">
			<NavHeader />
			<div className="container">
				{
					!loading && product !== null &&
					(
						<section className="product-detail">
							<div className={`cart-message ${showCartMessage && 'show'}`}>
								Produto adicionado ao carrinho
							</div>
							<div className="product-image">
								<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${product.id}.png`} alt={product.nome} />
							</div>
							<div className="produt-description">
								<h1>{product.nome} - cod.{product.id}</h1>
								<p>{product.descricao}</p>
								<p>{getStringWeight(product)}</p>
								<div className="product-price">
									<div className="prices">
										{getStringPrice(product)}
									</div>
									<ButtonBasic type="button" onClick={addTocart} className="btn-royal-blue">Comprar</ButtonBasic>
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
