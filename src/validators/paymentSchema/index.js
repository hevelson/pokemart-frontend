import * as yup from 'yup';

const creditCardRequired = {
  is: (val) => val === 'creditCard',
  then: yup.string().required('Obrigatório'),
  otherwise: yup.string().notRequired(),
};

export default yup.object().shape({
  paymentMethod: yup.string().required('Obrigatório'),
  cardNumber: yup.string().notRequired().when('paymentMethod', creditCardRequired),
  cardName: yup.string().notRequired().when('paymentMethod', creditCardRequired),
  cardExpiry: yup.string().notRequired().when('paymentMethod', creditCardRequired),
  cardCvc: yup.string().notRequired().when('paymentMethod', creditCardRequired),
});
