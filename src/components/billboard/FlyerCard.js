import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './flyerCard.module.css';

export default function FlyerCard({ title, imgSource, text, id }) {
  return (
    <article className={ styles.flyerContainer }>
      <li className={ styles.flyerCard }>
        <Link to={"/concerts/:concertId"}>
          <div className={ styles.overflow }>
            <img className={ styles.cardImg }
              src={imgSource}
              alt={text} />
          </div>
          <div>
            {title}
          </div>
        </Link>
      </li>
    </article>
  )
}
FlyerCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired,
  text: PropTypes.string,
}