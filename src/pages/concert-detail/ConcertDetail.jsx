import FlyerCard from "../../components/billboard/FlyerCard"
import PropTypes from 'prop-types';
import Concert from "../../utils/flyers/concert";
import styles from "./ConcertDetail.module.css"

export default function ConcertDetail() {
  return (
    <section className={styles.detailContainer} >

      <img src={Concert.poster_path} alt={Concert.title_description} className={`${styles.col} ${styles.concertImg}`} />


      <div className={`${styles.col} ${styles.concertDetails}`}>
        <p className={ styles.artistsArr }><strong>
          {
            Concert.artists.map(artist => artist).join(', ')
          }
        </strong></p>
        <p>{Concert.title_description}</p>
        <ul>
          <li>Date: { Concert.date } - { Concert.time }Hs.</li>
          <li> { Concert.adress } - { Concert.city } </li>
          <li> ${ Concert.ticketPrice } </li>
        </ul>
      </div>
    </section>
  )
}

FlyerCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imgSource: PropTypes.string.isRequired,
  text: PropTypes.string,
}