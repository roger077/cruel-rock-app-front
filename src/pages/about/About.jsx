
import AboutCard from '../../components/about-us/AboutCard';
import GustavoImg from '../../assets/about-cruel-rock/gustavo.jpg';
import './about.module.css';

export default function About() {
  return (
    <section className='about.module.section'>
    
    <AboutCard name='Gustaveiro' desc='Un gran tipo' imgURL={ GustavoImg } />
    </section>
  )
}