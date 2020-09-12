import * as yup from 'yup';

import profileSchema from '../profileSchema';

export default profileSchema.shape({
  email: yup.string().email('E-mail inválido').required('Obrigatório'),
  senha: yup.string().required('Obrigatório'),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais')
    .required('Obrigatório'),
});
