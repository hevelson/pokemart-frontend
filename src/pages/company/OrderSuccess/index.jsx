import React from 'react';
import { Link } from 'react-router-dom';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';

const OrderSuccessPage = () => {

	return(
		<main className="register-success-page">
			<NavHeader />
			<div className="container">
				<section className="page-message">
					<h1>Compra finalizada</h1>
					<p>Parabéns, sua compra foi finalizada com sucesso!</p>
					<p>Você receberá o pedido dentro do prazo de envio.</p>
				</section>
				<Link to="/" className="btn btn-primary">Voltar para Home</Link>
      </div>
			<Footer />
		</main>
	);
}

export default OrderSuccessPage;
