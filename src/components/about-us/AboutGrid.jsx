import AboutCard from '../about-us/AboutCard';
import styles from './aboutGrid.module.css';
import gustIMG from '../../assets/about-cruel-rock/gustavo.jpg'

export default function AboutGrid() {
    return (
        <section className={styles.aboutGrid}>
            <AboutCard name='Gustavo' desc='Es un tipazo' imgURL={gustIMG}/>
            <AboutCard name='Gustavo' desc='Es un tipazo' imgURL={gustIMG}/>
        </section>
    )
}