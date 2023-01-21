import FlyerCard from './FlyerCard';
import styles from './billboard.module.css';
import concerts from "../../utils/flyers/concerts"


export default function Billboard() {
    return (
        <section>
            <ul className={styles.billboard}>
                {
                    concerts.map((concert) => (
                        <FlyerCard title={concert.title_description} imgSource={concert.poster_path} text={concert.adress} url={concert.url} id={concert.id} />
                    ))
                }
            </ul>
        </section>
    )
}