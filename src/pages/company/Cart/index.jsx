import React from 'react';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
import CartProducts from './CartProducts';

const CartPage = () => {

	return(
		<main className="cart-page">
			<NavHeader />
			<CartProducts />
			<Footer />
		</main>
	);
}

export default CartPage;
