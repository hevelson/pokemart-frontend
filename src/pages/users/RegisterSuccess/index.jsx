import React from 'react';
import { Link } from 'react-router-dom';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';

const RegisterSuccessPage = () => {

	return(
		<main className="register-success-page">
			<NavHeader />
			<div className="container">
				<section className="page-message">
					<h1>Cadastro concluído</h1>
					<p>Parabéns, seu cadastro foi concluído com sucesso!</p>
					<p>Você já pode fazer login com o e-mail e senha informados.</p>
				</section>
				<Link to="/login" className="btn btn-primary">Voltar para Login</Link>
      </div>
			<Footer />
		</main>
	);
}

export default RegisterSuccessPage;
