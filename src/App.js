import React, { useState, useEffect } from 'react';

import Routes from './Routes';

import logo from './assets/images/logo.svg';

import './styles/app.scss';

const App = () => {

  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    if (appLoading) {
      setTimeout(() => {
        setAppLoading(false);
      }, 500);
    }
  }, [appLoading])

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
