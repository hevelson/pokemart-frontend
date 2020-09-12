import React from 'react';
import { useFormik } from 'formik';

import ButtonBasic from '../../../components/ButtonBasic';

const FormLogin = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: '',
      senha: '',
    },
    onSubmit: async values => {
      login(values);
    },
  });

  const login = (values) => {
    const { email, senha } = values;
    console.log({email, senha});
  }

	return(
    <section className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form-login">
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            className="form-input" 
            name="email" 
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            className="form-input" 
            name="senha" 
            value={values.senha}
            onChange={handleChange}
            required
          />
        </div>
        <ButtonBasic type="submit" className="btn-primary btn-login">Login</ButtonBasic>
      </form>
    </section>
	);
}

export default FormLogin;
