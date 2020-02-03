import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './styles.css';
import Logo from './logo.png'

export default class Header extends Component {

  state = {
    condition: false
  }

  handleClick = () => {
    this.setState({
      condition: !this.state.condition
    });
  }

  render() {
      return (
        <header id="main-header">
          <div className="navbar-container">
            <nav>
              <a href="#">
                <img src={Logo} className="logo" alt="logo webest"/>
              </a>
              <div 
                  onClick={ this.handleClick } 
                  className= { this.state.condition ? "menu open" : "menu" }
                >
                <FontAwesomeIcon icon={this.state.condition ? faTimes : faBars}  />
              </div>
              <ul class="navbar-items">
                <li><a href="">Quem Somos</a></li>
                <li><a href="">O que Fazemos</a></li>
                <li><a href="">Nossos Cases</a></li>
                <li><a href="" class="default-btn">Comece um Projeto</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
  }
}
