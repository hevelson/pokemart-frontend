import http, { getErrorMessage } from '../lib/http';

const { get, post } = http();

export const getPayments = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await get(`/formas_pagamento`);

      if (response.data.error || response.data.errors) {
        throw new Error(response.data);
      }

      resolve(response.data);
    } catch (error) {
      reject(getErrorMessage(error));
    }
  });
};

export const newOrder = (checkoutData) => {
  return new Promise(async (resolve, reject) => {
    let orderData = {
      produtos: checkoutData.produtos,
      fkFormaPagamentoId: checkoutData.pagamento,
      fkEnderecoId: checkoutData.endereco
    }

    try {
      const response = await post(`/vendas`, orderData);

      if (response.data.error || response.data.errors) {
        throw new Error(response.data);
      }

      resolve(response.data);
    } catch (error) {
      reject(getErrorMessage(error));
    }
  });
};

export default { getPayments, newOrder };
