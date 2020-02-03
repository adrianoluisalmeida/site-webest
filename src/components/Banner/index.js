import React from 'react';

import ImageHeader from './images/HeaderSVG.png'
import './styles.css';

const Banner = () => (
  <div className="main-banner">
    <div className="container">
      <div>
        <h1>Vivemos para realizar</h1>
        <p className="mt-40">
          Sua necessidade é nossa maior prioridade. Transformamos seus desejos em soluções reais.  
        </p>
      </div>
      <div>
        <img src={ImageHeader} alt="" />
      </div>

    </div>
  </div>
);

export default Banner;