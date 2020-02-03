import React from 'react'

import './styles.css'

import ImageService1 from './images/1.png'
import ImageService2 from './images/2.png'
import ImageService3 from './images/3.png'

const Services = () => (
  <section className="services-section">
    <div className="container">
      <h2>O que fazemos</h2>
      <ul className="mt-40">
        <li>
          <img src={ImageService1} alt="" />
          <h3>Sistemas completos</h3>
          <p>
            Com aplicação Web e Mobile. Estruturamos e desenvolvemos plataformas completas sob encomenda.
                                </p>
        </li>
        <li>
          <img src={ImageService2} alt="" />
          <h3>Sites e Sistemas <br /> Responsivos</h3>
          <p>
            Para acesso em qualquer dispositivo. A praticídade do seu negócio pode estar onde você quiser.
                                </p>
        </li>
        <li>
          <img src={ImageService3} alt="" />
          <h3>Aplicativos Android e IOS</h3>
          <p>
            Aplicativos que funcionam em qualquer smartphone. Sua empresa onde você quiser.
                                </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Services;