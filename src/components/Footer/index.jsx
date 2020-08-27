import React from 'react';

import Payments from '../Payments';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (  
    <footer className="main-footer">
      <Payments />
      <section className="footer-copyright">
        <div className="container">
          <p>Pokemart - {currentYear}</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
