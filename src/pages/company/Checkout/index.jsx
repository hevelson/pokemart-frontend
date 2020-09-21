// pokemart-frontend/src/pages/company/Checkout/index.jsx
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import { clearCart } from '../../../store/cart/actions';
import { getAddress, postAddress } from '../../../services/users';
import { getPayments, newOrder } from '../../../services/payments';
import paymentSchema from '../../../validators/paymentSchema';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
import ButtonBasic from '../../../components/ButtonBasic';
import PurchaseSummary from './PurchaseSummary';
import AddressModal from './AddressModal';
import { useEffect } from 'react';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { isAuth, user } = useSelector(state => state.user);
  const { itens } = useSelector(state => state.cart);
  const [addressList, setAddressList] = useState([]);
  const [paymentList, setPaymentList] = useState([]);
  const [showAddressModal, setShowAddressModal] = useState(false);

  const { handleChange, handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      pagamento: '',
      endereco: '',
      produtos: []
    },
    validationSchema: paymentSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      if (values.produtos && values.produtos.length) {
        try {
          const order = await newOrder(values);
          if (order === "Sucesso") {
            dispatch(clearCart());
            history.push("/order-success");
          }
          console.log(order);
        } catch (error) {
          alert('Ocorreu um erro ao processar a sua compra!');
        }
      } else {
        alert('Você não tem produtos na sua compra');
      }
    },
  });

  const getAddressList = async () => {
    try {
      const addressList = await getAddress();
      if (typeof addressList === 'object') {
        setAddressList(addressList);
      } else {
        setAddressList([]);
      }
    } catch (error) {
      setAddressList([]);
    }
  }

  useEffect(() => {
    let produtos = [];
    for (let key in itens) {
      const item = itens[key];
      produtos.push({
        id: item.id,
        nome: item.title,
        preco: item.price,
        qtd: item.qtd
      });
    }
    setFieldValue('produtos', produtos);
  }, [itens, setFieldValue])

  useEffect(() => {
    if (isAuth) {
      const getPaymentList = async () => {
        try {
          const paymentsList = await getPayments();
          setPaymentList(paymentsList);
        } catch (error) {
          setPaymentList([]);
        }
      }
      getAddressList();
      getPaymentList();
    }
  }, [isAuth]);

  const newAddress = async (addressData) => {
    addressData.cobranca = addressData.cobranca ? 1 : 0;
    addressData.fkUsuarioId = user.id;
    try {
      await postAddress(addressData);
      await getAddressList();
      setShowAddressModal(false);
    } catch (error) {

    }
  }

  const paymentForm = () => {

    if (values.paymentMethod === 'creditCard') {
      return (
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

  const renderAddress = (addressId, addressList) => {
    if (addressId) {
      const address = addressList.find(address => address.id === parseInt(addressId));

      if (address) {
        const {
          rua,
          num,
          bairro,
          cidade,
          estado,
          cep
        } = address;

        return (
          <>
            <p className="street">{`${rua}, ${num}`}</p>
            <p className="neighborhood">{bairro}</p>
            <p className="city-state">{`${cidade}/${estado}`}</p>
            <p className="post-code">{cep}</p>
          </>
        )

      }
    }

    return <></>
  }

  return (
    <main className="checkout-page">
      <NavHeader />
      <div className="container">
        <AddressModal
          modalIsOpen={showAddressModal}
          closeModal={() => setShowAddressModal(false)}
          onSubmit={newAddress}
        />
        <form name="form-register" onSubmit={handleSubmit}>
          <div className="checkout-columns">
            <section className="address">
              <h2>Endereço</h2>
              <div className="form-group">
                <label htmlFor="endereco">
                  Endereço de entrega
                  {errors.endereco && touched.endereco ? <span className="label-error">{errors.endereco}</span> : ''}
                </label>
                <select
                  name="endereco"
                  value={values.endereco}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Selecione o endereço...</option>
                  {
                    addressList.map((address, key) => {
                      return (
                        <option key={key} value={address.id}>{address.descricao}</option>
                      );
                    })
                  }
                </select>
                <ButtonBasic type="button" onClick={() => setShowAddressModal(true)}>Novo endereço</ButtonBasic>
              </div>
              <div className="selected-address">
                {renderAddress(values.endereco, addressList)}
              </div>
            </section>
            <section className="payment">
              <h2>Pagamento</h2>
              <div className="select-payment form-group">
                <label htmlFor="pagamento">
                  Forma de pagemento
                  {errors.pagamento && touched.pagamento ? <span className="label-error">{errors.pagamento}</span> : ''}
                </label>
                <select
                  name="pagamento"
                  value={values.pagamento}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Selecione...</option>
                  {
                    paymentList.map((payment, key) => {
                      return (
                        <option key={key} value={payment.id}>{payment.descricao}</option>
                      );
                    })
                  }
                </select>
              </div>
              {paymentForm()}
            </section>
            <PurchaseSummary postPrice={19.99} finish={handleSubmit} />
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}

export default CheckoutPage;
