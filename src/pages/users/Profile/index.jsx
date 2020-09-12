import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NavHeader from '../../../components/NavHeader';
import Footer from '../../../components/Footer';

const ProfilePage = () => {
  const { isAuth } = useSelector(state => state.user);

  if (!isAuth) {
    return <Redirect to={
      {
        pathname: "/login",
        goBack: "profile"
      }
    } />;
  }

	return(
		<main className="profile-page">
			<NavHeader />
			<div className="container">
        <nav className="side-bar">
          <ul>
            <li>Perfil</li>
            <li>Compras</li>
          </ul>
        </nav>
        <section className="profile-form">
          Formulário de perfil
        </section>
        <section className="purchases-list">
          Lista de pedidos
        </section>
      </div>
			<Footer />
		</main>
	);
}

export default ProfilePage;
