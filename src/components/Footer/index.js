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
        <a href="http://projeto.webest.com.br" className="button-footer">
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
      <div className="contact-container">
        <h4>Entre em contato conosco</h4>
        <ul>
          <li>
            <a href="mailto:contato@webest.com.br">contato@webest.com.br</a>
          </li>
          <li>
            <a href="tel:+5555991930183"> 55 9 9193-0183 </a> 
            <a rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=5555991930183&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20prestados%20pela%20Webest.%20">
              (whatsapp)
            </a>
            
          </li>
        </ul>
        

        
      </div>
    </div>
  </footer>

);

export default Footer;