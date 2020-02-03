import React, {Component} from 'react';
import './styles.css';

import About from '../../components/About'
import Services from '../../components/Services'
import Banner from '../../components/Banner'
import Cases from '../../components/Cases'
import Footer from '../../components/Footer'

export default class Main extends Component{

    render(){
        return (
            <main>
                <Banner/>
                <About/>
                <Services/>
                <Cases/>
                <Footer/>
            </main>
        )
    }
}