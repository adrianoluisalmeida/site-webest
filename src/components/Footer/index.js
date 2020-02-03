import React from 'react';

import './styles.css';
import ImgFacebook from './images/facebook.svg';
import ImgInstagram from './images/instagram.svg';

const Footer = () => (
  <footer className="section-footer">
    <div className="container">
      <div>
        <h2>
          O que você precisa para alcançar seus objetivos?
        </h2>
      </div>
      <div>
        <div className="description">
          <h2>
            Vamos descobrir juntos?
          </h2>
        </div>
        <a href="" className="button-footer">
          Falar sobre o projeto
        </a>
      </div>
    </div>

    <hr/>

    <div className="container">
      <div className="social-container">
        <h4>Acompanhe a Webest</h4>
        <ul>
          <li>
            
              <a href="">
                <img src={ImgFacebook} alt=""/>
                Facebook
              </a>
          </li>
          <li>
            
            <a href="">
              <img src={ImgInstagram} alt=""/>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>

);

export default Footer;