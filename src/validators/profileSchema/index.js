import { addMethod, string } from 'yup';
import * as yup from 'yup';
import { cpf, cnpj } from 'cpf-cnpj-validator';

function validateCpfCnpj(message) {
  return this.test('validateCpfCnpj', message, function (value) {
    const { path, createError } = this;
    return cpf.isValid(value, true) || cnpj.isValid(value, true) || createError({ path, message });
  });
}

addMethod(string, 'validateCpfCnpj', validateCpfCnpj);

export default yup.object().shape({
  nome: yup.string().required('Obrigatório'),
  sexo: yup.string().required('Obrigatório'),
  cpf: yup.string().validateCpfCnpj('Número inválido').required('Obrigatório'),
  dataNascimento: yup.string().required('Obrigatório'),
  telefone: yup.string().required('Obrigatório'),
});
