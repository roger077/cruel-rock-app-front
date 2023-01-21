import AboutCard from '../about-us/AboutCard';
import styles from './aboutGrid.module.css';
import gustIMG from '../../assets/about-cruel-rock/gustavo.jpg';
import juniorIMG from '../../assets/about-cruel-rock/junior.jpg';

export default function AboutGrid() {
    return (
        <section>
            <div className={ styles.aboutGrid }>
                <AboutCard name='Gustavo' desc='Es un tipazo' imgURL={gustIMG} />
                <AboutCard name='Junior' desc='Es otro tipazo' imgURL={juniorIMG} />
            </div>

            <article className={ styles.cruelInfo }>
                <h2>Cruel rock</h2>
                <p>
                    El proyecto "Cruel Rock" nace...
                </p>
            </article>
        </section>
    )
}