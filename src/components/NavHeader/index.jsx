import React from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

const NavHeader = () => {

  return (  
    <header className="nav-header">
      <h1>Pokemart</h1>
      <div className="right-elements">
        <button className="btn-user"><FaUser /></button>
        <button className="btn-cart"><FaShoppingCart /></button>
      </div>
    </header>
  );
};

export default NavHeader;
