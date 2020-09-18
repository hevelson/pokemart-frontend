import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';

import { stringPrice } from '../../../lib/utils';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';

const OrderPage = () => {
  let location = useLocation();
  const { order } = location;

  if (!order) {
    return <Redirect to="/profile" />;
  }

  const valor = stringPrice(order.valor_total);

  const listProducts = (item, key) => {
    const {
      nome,
      peso,
      valor,
      qtd
    } = item;
    const valorProduto = stringPrice(valor);

    return(
      <tr key={key}>
        <td>{(key + 1)}</td>
        <td>{nome}</td>
        <td>{`R$ ${valorProduto}`}</td>
        <td>{peso}</td>
        <td>{qtd}</td>
      </tr>
    );
  }

  return(
    <main className="profile-page">
			<NavHeader />
			<div className="container">
        <section className="orders-section">
          <h1>Detalhes do pedido</h1>
          <table className="orders-table" cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Endereço de entrega</th>
                <th>Valor da compra</th>
                <th>Data da compra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{order.cliente_nome}</td>
                <td>{order.endereco_entrega}</td>
                <td>{`R$ ${valor}`}</td>
                <td>{order.data_compra}</td>
              </tr>
            </tbody>
          </table>

          <h2>Produtos</h2>
          <table className="orders-table" cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>Item</th>
                <th>Nome</th>
                <th>Valor</th>
                <th>Peso</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {order.produtos.map(listProducts)}
            </tbody>
          </table>
        </section>
      </div>
			<Footer />
		</main>
  );
}

export default OrderPage;
