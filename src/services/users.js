import http, { getErrorMessage } from '../lib/http';

const { post } = http();

export const login = ({ email, senha }) => {
  return new Promise(async (resolve, reject) => {
    const params = { email, senha };
    try {
      const response = await post(`/login`, params);

      if (response.data.error || response.data.errors) {
        throw new Error(response.data);
      }

      resolve(response.data);
    } catch (error) {
      reject(getErrorMessage(error));
    }
  });
};

export const register = (userData) => {
  return new Promise(async (resolve, reject) => {
    let params = userData;
    params.tipoUsuario = 0;
    try {
      const response = await post(`/usuarios`, params);

      if (response.data.error || response.data.errors) {
        throw new Error(response.data);
      }

      resolve(response.data);
    } catch (error) {
      reject(getErrorMessage(error));
    }
  });
};

export default { login, register };