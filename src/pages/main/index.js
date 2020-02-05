import React, {Component} from 'react';
import './styles.css';

import About from '../../components/About';
import Services from '../../components/Services';
import Banner from '../../components/Banner';
import Cases from '../../components/Cases';
import Footer from '../../components/Footer';

import { Helmet } from 'react-helmet';

export default class Main extends Component{

    render(){
        return (
            <main>
                <Helmet>
                    <title>Webest - Vivemos para realizar!</title>
                    <meta name="description" content="Sua necessidade é nossa maior prioridade. Transformamos seus desejos em soluções reais." />
                </Helmet>
                <Banner/>
                <About/>
                <Services/>
                <Cases/>
                <Footer/>
            </main>
        )
    }
}