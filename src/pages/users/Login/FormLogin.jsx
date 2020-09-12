import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../../../services/users';
import { setAuthToken } from '../../../store/user/actions';

import ButtonBasic from '../../../components/ButtonBasic';

const FormLogin = ({ goBack }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.user);

  const sendLogin = async (values) => {
    const { email, senha } = values;
    try {
      const token = await login({email, senha});
      dispatch(setAuthToken(token));
    } catch (error) {
      console.log({email, senha});
    }
  }

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: '',
      senha: '',
    },
    onSubmit: sendLogin,
  });

  useEffect(() => {
    if (isAuth) {
      if (goBack) {
        history.push(`/${goBack}`);
      } else {
        history.push("/cart");
      }
    }
  }, [isAuth, history, goBack])

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
