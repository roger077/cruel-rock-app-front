import React from 'react';
import FlyerCard from './FlyerCard';
import './billboard.css';
import concerts from "../../utils/flyers/concerts"


export default function Billboard() {
    return (

        <section className='billboard container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {
                    concerts.map(concert => (
                        <div className='col-md-3' key={concert.id}>
                            <FlyerCard title={concert.title_description} imgSource={concert.poster_path} text={concert.adress} url={concert.url} id={concert.id} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}