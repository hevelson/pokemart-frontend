import React from 'react';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
import ButtonBasic from '../../../components/ButtonBasic';
import FormLogin from './FormLogin';

const LoginPage = () => {

  const signUp = (e) => {
    e.preventDefault();
  }

	return(
		<main className="login-page">
			<NavHeader />
			<div className="container">
        <div className="login-signup">
          <FormLogin />
          <section className="signup">
            <h2>Cadastre-se</h2>
            <form onSubmit={signUp} className="form-signup">
              <div className="form-group">
                <label htmlFor="nome">Nome completo</label>
                <input type="text" className="form-input" name="nome" />
              </div>
              <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <input type="text" className="form-input" name="cpf" />
              </div>
              <div className="form-group">
                <label htmlFor="dataNascimento">Data de nascimento</label>
                <input type="date" className="form-input" name="dataNascimento" />
              </div>
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input type="phone" className="form-input" name="telefone" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-input" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Sexo</label>
                <select name="sexo" className="form-input">
                  <option value="">Selecione...</option>
                  <option value="1">Feminino</option>
                  <option value="2">Masculino</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input type="password" className="form-input" name="senha" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmarSenha">Confirmar senha</label>
                <input type="password" className="form-input" name="confirmarSenha" />
              </div>
              <ButtonBasic type="submit" className="btn-primary btn-signpup">Cadastrar</ButtonBasic>
            </form>
          </section>
        </div>
      </div>
			<Footer />
		</main>
	);
}

export default LoginPage;
