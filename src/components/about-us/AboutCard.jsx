
import PropTypes from 'prop-types';
import styles from "./aboutCard.module.css"

export default function AboutCard({ name, desc, imgURL}) {
  return (
    <article className={ styles.aboutContainer } >
      <img src={imgURL} alt={name} className={`${styles.col} ${styles.aboutImg}`} />
      <div className={`${styles.col} ${styles.aboutDetails}`}>
        <p><strong>
          {name}
        </strong></p>
        <p>{desc}</p>
        
      </div>
    </article>
  )
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imgSource: PropTypes.string.isRequired,
  text: PropTypes.string,
}