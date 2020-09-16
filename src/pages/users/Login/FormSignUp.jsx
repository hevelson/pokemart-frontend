import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import userRegisterSchema from '../../../validators/userRegisterSchema';
import { register } from '../../../services/users';

import ButtonBasic from '../../../components/ButtonBasic';

const FormSignUp = () => {
  let history = useHistory();
  const sendRegister = async (values) => {
    let postData = { ...values };

    const birthdate = new Date(values.dataNascimento);
    const dia  = birthdate.getDate().toString().padStart(2, '0');
    const mes  = (birthdate.getMonth()+1).toString().padStart(2, '0');
    const ano  = birthdate.getFullYear();
    
    postData.dataNascimento = `${dia}/${mes}/${ano}`;

    try {
      const userInfo = await register(postData);
      history.push("/register-success");
    } catch (error) {
      console.log(error);
    }
  }

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      nome: '',
      sexo: '',
      cpf: '',
      dataNascimento: '',
      telefone: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    },
    validationSchema: userRegisterSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: sendRegister,
  });

	return(
    <section className="signup">
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit} className="form-signup">
        <div className="form-group">
          <label htmlFor="nome">
            Nome completo 
            {errors.nome && touched.nome ? <span className="label-error">{errors.nome}</span> : ''}
          </label>
          <input 
            type="text" 
            className={`form-input ${!errors.nome ? '' : 'error'}`}
            name="nome" 
            onChange={handleChange} 
            value={values.nome} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">
            CPF
            {errors.cpf && touched.cpf ? <span className="label-error">{errors.cpf}</span> : ''}
          </label>
          <input 
            type="text" 
            className={`form-input ${!errors.cpf ? '' : 'error'}`}
            name="cpf" 
            onChange={handleChange} 
            value={values.cpf} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="dataNascimento">
            Data de nascimento
            {errors.dataNascimento && touched.dataNascimento ? <span className="label-error">{errors.dataNascimento}</span> : ''}
          </label>
          <input 
            type="date" 
            className={`form-input ${!errors.cpf ? '' : 'error'}`}
            name="dataNascimento" 
            onChange={handleChange} 
            value={values.dataNascimento} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">
            Telefone
            {errors.telefone && touched.telefone ? <span className="label-error">{errors.telefone}</span> : ''}
          </label>
          <input 
            type="phone" 
            className={`form-input ${!errors.telefone ? '' : 'error'}`}
            name="telefone" 
            onChange={handleChange} 
            value={values.telefone} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            E-mail
            {errors.email && touched.email ? <span className="label-error">{errors.email}</span> : ''}
          </label>
          <input 
            type="email" 
            className={`form-input ${!errors.email ? '' : 'error'}`}
            name="email" 
            onChange={handleChange} 
            value={values.email} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="sexo">
            Sexo
            {errors.sexo && touched.sexo ? <span className="label-error">{errors.sexo}</span> : ''}
          </label>
          <select 
            name="sexo" 
            className={`form-input ${!errors.sexo ? '' : 'error'}`}
            onChange={handleChange} 
            value={values.sexo}
          >
            <option value="">Selecione...</option>
            <option value="1">Feminino</option>
            <option value="2">Masculino</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="senha">
            Senha
            {errors.senha && touched.senha ? <span className="label-error">{errors.senha}</span> : ''}
          </label>
          <input 
            type="password" 
            className={`form-input ${!errors.senha ? '' : 'error'}`}
            name="senha" 
            onChange={handleChange} 
            value={values.senha} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarSenha">
            Confirmar senha
            {errors.confirmarSenha && touched.confirmarSenha ? <span className="label-error">{errors.confirmarSenha}</span> : ''}
          </label>
          <input 
            type="password" 
            className={`form-input ${!errors.confirmarSenha ? '' : 'error'}`}
            name="confirmarSenha" 
            onChange={handleChange} 
            value={values.confirmarSenha} 
          />
        </div>
        <ButtonBasic type="submit" className="btn-primary btn-signpup">Cadastrar</ButtonBasic>
      </form>
    </section>
	);
}

export default FormSignUp;
