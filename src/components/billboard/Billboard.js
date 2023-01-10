import React from 'react';
import FlyerCard from './FlyerCard';
import './billboard.css';
import image1 from '../../assets/flyers/flyer1.jpg';
import image2 from '../../assets/flyers/flyer2.jpg';
import image3 from '../../assets/flyers/flyer3.jpg';
import image4 from '../../assets/flyers/flyer4.jpg';
import image5 from '../../assets/flyers/flyer5.jpg';

const flyers = [
    {
        id: 1,
        title: 'Live Rock 1',
        image: image1,
        url: 'https://www.google.com',
        text: 'Bandas - Lugar - Fecha - Horario - Entradas - Mas detalles',
        /* AÑADIR MAS PROPS CON MAS DETALLES, LINKS, ETC
        PERO SOLO SE VERÁN CUANDO SE HAGA CLICK */

    },
    {
        id: 2,
        title: 'Live Rock 2',
        image: image2,
        url: 'https://www.google.com',
        text: 'Bandas - Lugar - Fecha - Horario - Entradas - Mas detalles',
    },
    {
        id: 3,
        title: 'Live Rock 3',
        image: image3,
        url: 'https://www.google.com',
    },
    {
        id: 4,
        title: 'Live Rock 4',
        image: image4,
        url: 'https://www.google.com',
        text: 'Bandas - Lugar - Fecha - Horario - Entradas - Mas detalles',
    },
    {
        id: 5,
        title: 'Live Rock 5',
        image: image5,
        url: 'https://www.google.com',
    },

]

function Billboard() {
  return (
    <section className='billboard container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                flyers.map(flyer =>(
                    <div className='col-md-3' key={flyer.id}>
                <FlyerCard title={flyer.title} imgSource={flyer.image} text={flyer.text} url={flyer.url}/>
            </div>
                ))
            }
        </div>
    </section>
  )
}

export default Billboard