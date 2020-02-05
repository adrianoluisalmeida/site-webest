import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
                <li>
                  <AnchorLink href="#quem-somos" offset="100">
                    Quem Somos
                  </AnchorLink>  
                </li>
                <li>
                  <AnchorLink href="#o-que-fazemos" offset="100">
                    O que Fazemos
                  </AnchorLink>
                </li>  
                <li>
                  <AnchorLink href="#nossos-cases">
                    Nossos Cases
                  </AnchorLink>
                </li>

                <li>
                  <AnchorLink href="#comece-um-projeto" className="default-btn" offset="100">
                    Comece um Projeto
                  </AnchorLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
  }
}
