import React from 'react'

import './styles.css'

import VerdclubLogo from './images/marca_verdclub.png';
import VerdclubCel from './images/verdclub_cel.svg';

const Cases = () => (
  <section id="nossos-cases"  className="cases-section">
    <div className="container">
      <div>
        <h2>Nossos Cases</h2>
        <div className="buttons-cases-container">
          <div className="verdclub button-cases">
            <img src={VerdclubLogo} alt=""/>
          </div>
        </div>
        <h3>
          Vitrine online para empresas físicas
        </h3>
        <ul>
          <li>
            Painel administrativo web
          </li>
          <li>
            App para consumidores consultarem as ofertas
          </li>
          <li>
            App para o atendente fazer a verificação de compra
          </li>
          <li>
            Rastreio de compras mesmo em dinheiro
          </li>
          
        </ul>
        <a href="https://verdclub.com">www.verdclub.com</a>
      </div>
      <div>
        <img className="verdclub-cel" src={VerdclubCel} alt=""/>
        <div className="shadow-cel"></div>
      </div>
    </div>
  </section>
);

export default Cases;