import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { getOders } from '../../../services/users';
import { stringPrice } from '../../../lib/utils';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';

const ProfilePage = () => {
  const { isAuth } = useSelector(state => state.user);

  const [orderList, setOrderList] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    if (loadingOrders && isAuth) {
      const loadOrders = async () => {
        try {
          const orders = await getOders();
          if (orders.length) {
            setOrderList(orders);
          }
        } catch (error) {
          setOrderList([]);
        }
        setLoadingOrders(false);
      }

      loadOrders();
    }
  }, [loadingOrders, isAuth]);

  if (!isAuth) {
    return <Redirect to={
      {
        pathname: "/login",
        goBack: "profile"
      }
    } />;
  }

  const renderOrderRow = (order, key) => {
    const { valor_total, data_compra } = order;
    const valor = stringPrice(valor_total);

    return(
      <tr key={key}>
        <td className="">{(key + 1)}</td>
        <td>{`R$ ${valor}`}</td>
        <td>{data_compra}</td>
        <td>
          <Link 
            to={{ 
              pathname: `/profile/order/detail`, 
              order: order
            }}
          >
            Ver
          </Link>
        </td>
      </tr>
    );
  }

	return(
		<main className="profile-page">
			<NavHeader />
			<div className="container">
        <section className="orders-section">
          <h1>Pedidos</h1>
          <table className="orders-table" cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>#</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map(renderOrderRow)}
            </tbody>
          </table>
        </section>
      </div>
			<Footer />
		</main>
	);
}

export default ProfilePage;
