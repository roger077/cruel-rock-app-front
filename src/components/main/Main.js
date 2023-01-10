import React from 'react';
import Billboard from '../billboard/Billboard';
import AboutUs from '../about-us/AboutUs';
import './main.css';

function Main() {
  return (
    <main>
        <Billboard id='home'/>
        <AboutUs id='about-us'/>
    </main>
  )
}

export default Main