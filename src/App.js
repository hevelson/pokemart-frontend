import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Routes from './Routes';
import { loadLocalCart } from './store/cart/actions';
import { setAuthToken, setUserInfo } from './store/user/actions';

import logo from './assets/images/logo.svg';
import './styles/app.scss';

const App = () => {
  const dispatch = useDispatch();
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    if (appLoading) {
      dispatch(loadLocalCart());

      const token = localStorage.getItem('token');
      if (token) {
        const userInfo = localStorage.getItem('userInfo');
        dispatch(setAuthToken(token));
        dispatch(setUserInfo(userInfo));
      }

      setAppLoading(false);
    }
  }, [appLoading, dispatch]);

  if (appLoading) {
    return (
      <main className="loading-page">
        <div className="container">
          <div className="initial-loading">
            <div className="wrap-logo">
              <img src={logo} alt="Logo Pokemarket" />
            </div>
            <h1 className="app-title">Pokemart - Venda de pokemons</h1>
            <div className="overlay-loading">
              <p>Carregando...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return <Routes />;
}

export default App;
