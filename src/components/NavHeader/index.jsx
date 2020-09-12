import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

import Logo from '../../assets/images/pokemart-logo.png';

const NavHeader = () => {
  let history = useHistory();
  const { isAuth } = useSelector(state => state.user);

  const goToProfile = (e) => {
    e.preventDefault();
    if (isAuth) {
      history.push("/profile");
    } else {
      history.push("/login");
    }
  }

  return (  
    <header className="nav-header">
      <div className="container">
        <h1>
          <Link to="/">
            <img src={Logo} alt="Pokemart" />
          </Link>
        </h1>
        <div className="right-elements">
          <button className="btn-user" onClick={goToProfile}><FaUser /></button>
          <Link to="/cart" className="btn-cart"><FaShoppingCart /></Link>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
