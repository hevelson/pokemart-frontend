import React from 'react';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
import FormLogin from './FormLogin';
import FormSignUp from './FormSignUp';

const LoginPage = () => {

	return(
		<main className="login-page">
			<NavHeader />
			<div className="container">
        <div className="login-signup">
          <FormLogin />
          <FormSignUp />
        </div>
      </div>
			<Footer />
		</main>
	);
}

export default LoginPage;
