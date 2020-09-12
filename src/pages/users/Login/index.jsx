import React from 'react';
import { useLocation } from 'react-router-dom';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
import FormLogin from './FormLogin';
import FormSignUp from './FormSignUp';

const LoginPage = () => {
	let location = useLocation();

	return(
		<main className="login-page">
			<NavHeader />
			<div className="container">
        <div className="login-signup">
          <FormLogin goBack={location.goBack} />
          <FormSignUp />
        </div>
      </div>
			<Footer />
		</main>
	);
}

export default LoginPage;
