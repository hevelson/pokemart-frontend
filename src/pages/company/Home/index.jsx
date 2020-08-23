import React from 'react';

import ButtonBasic from '../../../components/ButtonBasic';
import NavHeader from '../../../components/NavHeader';
import FeaturedProducts from './FeaturedProducts';

const HomePage = () => {

	return(
		<main className="home-page">
			<NavHeader />
			<section class="hero-banner">
					<h2 class="title">Receba as nossas mais recentes novidades!</h2>
					<form action="/" class="form-sign">
						<input type="email" name="email" placeholder="Cadastre seu e-mail..." class="form-input"/>
						<ButtonBasic>Cadastrar!</ButtonBasic>
					</form>
			</section>
			<FeaturedProducts />
		</main>
	);
}

export default HomePage;
