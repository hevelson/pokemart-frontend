import http, { getErrorMessage } from '../lib/http';

const { get } = http();

export const getProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await get(`/produtos`);

      if (response.data.error || response.data.errors) {
        throw new Error(response.data);
      }

      resolve(response.data);
    } catch (error) {
      reject(getErrorMessage(error));
    }
  });
};

export const getProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await get(`/produtos?id=${id}`);

      if (response.data.error || response.data.errors) {
        throw new Error(response.data);
      }

      resolve(response.data);
    } catch (error) {
      reject(getErrorMessage(error));
    }
  });
};

export default { getProducts };
