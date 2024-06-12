import Casino from '../images/about/casino.png';
import Balls from '../images/about/balls.jpg';
import Triple from '../images/about/triple.jpg';
import Win from '../images/about/win.jpg';

function About () {
    return (
        <section className="about">
            <div className="about__container">
              <h2 className="about__title">About Us</h2>
              <img src={Casino} alt="casino" className="about__image"/>
              <p className="about__description">Welcome to Dream Catcher, the ultimate live casino experience where the excitement never ends! Our game combines the best of three classic casino favorites – Roulette, Poker, and a thrilling Slot-style Matching Game – all in one seamless, immersive platform.</p>
              <button className="about__button">Play Now</button>
            </div>
            <div className='about__swiper'>
                <img src={Balls} alt="balls" className="about__image"/>
                <img src={Triple} alt="triple" className="about__image"/>
                <img src={Win} alt="win" className="about__image"/>
            </div>
        </section>
    )
}

export default About;