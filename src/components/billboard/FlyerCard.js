import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './flyerCard.module.css';

export default function FlyerCard({ title, imgSource, text, id }) {
  return (
    <article className={ styles.flyerContainer }>
      <li className={ styles.flyerCard }>
        <Link to={"/concerts/:concertId"}>
          <div className={ styles.overflow }>
            <img className={ styles.cardImgTop }
              width={230}
              height={345}
              src={imgSource}
              alt={text} />
          </div>
          <div>
            {title}
          </div>
        </Link>
      </li>




      {/*  <img src={imgSource} alt='' className='card-img-top' />
        </div>
        <div className='card-body text-light'>
          <h4 className='card-title'>{title}</h4>
          <p className='card-text text-secondary'>
            {
              text ? text : 'Lorem Lorem Lorem Lorem Lorem Lorem'
            }
          </p> */}

    </article>
  )
}
FlyerCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired,
  text: PropTypes.string,
}