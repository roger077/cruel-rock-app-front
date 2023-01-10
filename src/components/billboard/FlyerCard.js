import React from 'react';
import PropTypes from 'prop-types';

function FlyerCard({title, imgSource, text, url}) {
  return (
    <article className='flyer-card text-center animate__animated animate__fadeInUp'>
      <div className='overFlow'>
      <img src={imgSource} alt='' className='card-img-top'/>
      </div>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
                {
                  text ? text : 'Lorem Lorem Lorem Lorem Lorem Lorem'
                }
            </p>
            <a href={url} className='btn btn-outline-secondary rounded-0' target='_blank' rel="noreferrer">
              +INFO
            </a>
        </div>
    </article>
  )
}
FlyerCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imgSource: PropTypes.string.isRequired,
  text: PropTypes.string,
}
export default FlyerCard