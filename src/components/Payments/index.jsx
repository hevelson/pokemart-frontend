import React from 'react';

import BandeiraCartao01 from '../../assets/images/bandeira-cartao-01.png';
import BandeiraCartao02 from '../../assets/images/bandeira-cartao-02.png';
import BandeiraCartao03 from '../../assets/images/bandeira-cartao-03.png';
import BandeiraCartao04 from '../../assets/images/bandeira-cartao-04.png';
import BandeiraCartao05 from '../../assets/images/bandeira-cartao-05.png';
import BandeiraCartao06 from '../../assets/images/bandeira-cartao-06.png';
import BandeiraCartao07 from '../../assets/images/bandeira-cartao-07.png';
import BandeiraCartao08 from '../../assets/images/bandeira-cartao-08.png';
import BandeiraCartao09 from '../../assets/images/bandeira-cartao-09.png';
import BandeiraCartao10 from '../../assets/images/bandeira-cartao-10.png';

import Selo01 from '../../assets/images/loja-selo-01.png';
import Selo02 from '../../assets/images/loja-selo-02.png';

const Payments = () => {
  return(
    <section className="section-payments">
      <div className="container">
        <div className="accepted-payments">
          <h2>Formas de pagamento</h2>
          <ul>
            <li><img src={BandeiraCartao01} alt="60x30" /></li>
            <li><img src={BandeiraCartao02} alt="60x30" /></li>
            <li><img src={BandeiraCartao03} alt="60x30" /></li>
            <li><img src={BandeiraCartao04} alt="60x30" /></li>
            <li><img src={BandeiraCartao05} alt="60x30" /></li>
            <li><img src={BandeiraCartao06} alt="60x30" /></li>
            <li><img src={BandeiraCartao07} alt="60x30" /></li>
            <li><img src={BandeiraCartao08} alt="60x30" /></li>
            <li><img src={BandeiraCartao09} alt="60x30" /></li>
            <li><img src={BandeiraCartao10} alt="60x30" /></li>
          </ul>
        </div>
        <div className="security-certificates">
          <h2>Certificados de segurança</h2>
          <ul>
              <li><img src={Selo01} alt="95x90"/></li>
              <li><img src={Selo02} alt="95x90"/></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Payments;
