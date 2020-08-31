import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

import Logo from '../../assets/images/pokemart-logo.png';

const NavHeader = () => {

  return (  
    <header className="nav-header">
      <div className="container">
        <h1>
          <Link to="/">
            <img src={Logo} alt="Pokemart" />
          </Link>
        </h1>
        <div className="right-elements">
          <button className="btn-user"><FaUser /></button>
          <button className="btn-cart"><FaShoppingCart /></button>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
