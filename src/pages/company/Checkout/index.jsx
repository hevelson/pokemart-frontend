import React from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import paymentSchema from '../../../validators/paymentSchema';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
import PurchaseSummary from './PurchaseSummary';

const CheckoutPage = () => {
  const { isAuth } = useSelector(state => state.user);

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      paymentMethod: '',
      cardName: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvc: '',
    },
    validationSchema: paymentSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      alert('Compra finalizada');
    },
  });

  const paymentForm = () => {

    if (values.paymentMethod === 'creditCard') {
      return(
        <div className="credit-card-form">
          <div className="form-group">
            <label htmlFor="cardName">Titular do cartão</label>
            <input 
              type="text" 
              name="cardName" 
              className={`form-input ${!errors.cardName ? '' : 'error'}`}
              value={values.cardName} 
              onChange={handleChange}
              error={errors.cardName && touched.cardName ? errors.cardName : ''}
              label="Nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Número do cartão</label>
            <input 
              type="text" 
              name="cardNumber" 
              className={`form-input ${!errors.cardNumber ? '' : 'error'}`}
              value={values.cardNumber} 
              onChange={handleChange}
              error={errors.cardNumber && touched.cardNumber ? errors.cardNumber : ''}
              label="Nome"
            />
          </div>
          <div className="inline-inputs">
            <div className="form-group">
              <label htmlFor="cardExpiry">Validade</label>
              <input 
                type="text" 
                name="cardExpiry" 
                className={`form-input ${!errors.cardExpiry ? '' : 'error'}`}
                value={values.cardExpiry} 
                onChange={handleChange}
                error={errors.cardExpiry && touched.cardExpiry ? errors.cardExpiry : ''}
                label="Nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardCvc">CVV</label>
              <input 
                type="text" 
                name="cardCvc" 
                className={`form-input ${!errors.cardCvc ? '' : 'error'}`}
                value={values.cardCvc} 
                onChange={handleChange}
                error={errors.cardCvc && touched.cardCvc ? errors.cardCvc : ''}
                label="Nome"
              />
            </div>
          </div>
        </div>
      );
    }

    return <></>;
  }

  if (!isAuth) {
    return <Redirect to={
      {
        pathname: "/login",
        goBack: "checkout"
      }
    } />;
  }

	return(
		<main className="checkout-page">
			<NavHeader />
      <div className="container">
        <form name="form-register" onSubmit={handleSubmit}>
          <div className="checkout-columns">
            <section className="address">
              <h2>Endereço</h2>
              <div className="selected-address">
                <p className="street">Rua: Virgilio de Rezende, 390</p>
                <p className="neighborhood">Centro</p>
                <p className="city-state">Itapetininga/SP</p>
                <p className="post-code">18200-500</p>
              </div>
            </section>
            <section className="payment">
              <h2>Pagamento</h2>
              <div className="select-payment form-group">
                <label htmlFor="paymentMethod">Forma de pagemento</label>
                <select 
                  name="paymentMethod" 
                  value={values.paymentMethod}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Selecione</option>
                  <option value="creditCard">Cartão de crédito</option>
                  <option value="bankSlip">Boleto bancário</option>
                </select>
              </div>
              { paymentForm() }
            </section>
            <PurchaseSummary postPrice={0} finish={handleSubmit} />
          </div>
        </form>
      </div>
			<Footer />
		</main>
	);
}

export default CheckoutPage;
