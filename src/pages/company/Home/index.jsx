import React from 'react';

import ButtonBasic from '../../../components/ButtonBasic';
import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
import FeaturedProducts from './FeaturedProducts';

const HomePage = () => {

	return(
		<main className="home-page">
			<NavHeader />
			<section className="hero-banner">
					<h2 className="title">Receba as nossas mais recentes novidades!</h2>
					<form action="/" className="form-sign">
						<input type="email" name="email" placeholder="Cadastre seu e-mail..." className="form-input"/>
						<ButtonBasic>Cadastrar!</ButtonBasic>
					</form>
			</section>
			<FeaturedProducts />
			<Footer />
		</main>
	);
}

export default HomePage;
