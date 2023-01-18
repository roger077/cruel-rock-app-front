import React from 'react';
import profileImg from '../../assets/about-cruel-rock/profileCruelRock.jpg';
import imgJunior from '../../assets/about-cruel-rock/junior.jpg'
import imgGustavo from '../../assets/about-cruel-rock/gustavo.jpg'
import AboutCard from './aboutCard.js';
import './about-us.css';

const junior =
    {
        /* image: imgJunior, */
        text1: 'Texto 1 Texto 1 Texto 1',
    }

const gustavo =
{
    /* image: imgJunior, */
    text1: 'Texto 1 Texto 1 Texto 1',
}

function AboutUs() {
  return (
    <section className='about-us container'>
        <article className='row justify-content-center'>
            <div className='col-auto'>
                <h2 className="subtitle">Nosotros</h2>
                <img src={profileImg} alt="Logo Cruel Rock" className="profile_picture brand-logo"></img>
            </div>
            <div className='text-light text-center about-text'>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                </p>
            </div>
            <AboutCard text1={junior.text1}/>
        </article>
        
        

        {/* <FlyerCard title={flyer.title} imgSource={flyer.image} text={flyer.text} url={flyer.url}/> */}


    </section>
  )
}

export default AboutUs