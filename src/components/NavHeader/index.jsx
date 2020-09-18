import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

import { userLogout } from '../../store/user/actions';

import Logo from '../../assets/images/pokemart-logo.png';

const NavHeader = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.user);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    if (isAuth) {
      setShowUserMenu(!showUserMenu);
    } else {
      history.push("/login");
    }
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    setShowUserMenu(false);
  }

  return (  
    <>
      <header className="nav-header">
        <div className="container">
          <h1>
            <Link to="/">
              <img src={Logo} alt="Pokemart" />
            </Link>
          </h1>
          <div className="right-elements">
            <div className="menu-wrap">
              <button className="btn-user" onClick={openMenu}><FaUser /></button>
              {
                showUserMenu &&
                <div className="user-menu">
                  <Link to="/profile" className="user-menu-item">Minha conta</Link>
                  <button className="user-menu-item" onClick={logout}>Sair</button>
                </div>
              }
            </div>
            <Link to="/cart" className="btn-cart"><FaShoppingCart /></Link>
          </div>
        </div>
      </header>
      <div className="padding-header" />
    </>
  );
};

export default NavHeader;
