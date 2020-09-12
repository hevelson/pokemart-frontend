import * as yup from 'yup';

export default yup.object().shape({
  pagamento: yup.number().required('Obrigatório'),
  endereco: yup.number().required('Obrigatório'),
});
