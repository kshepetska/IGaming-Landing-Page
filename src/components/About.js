import React, { useState, useEffect } from 'react';
import '../styles/About.scss';

import Slide1 from '../images/about/slide1-min.png';
import Slide2 from '../images/about/slide2-min.png';
import Slide3 from '../images/about/slide3-min.png';
import Image from '../images/about/about-img.png';

const slideImages = [
    {
        id: 1,
        image: Slide1
    },
    {
        id: 2,
        image: Slide2
    },
    {
        id: 3,
        image: Slide3
    }
];

function About() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev === slideImages.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about" id='about'>  
            <div className="about__container">
                <img src={Image} alt="about" className="about__image"/>
                <div className="about__content">
                  <h2 className="about__title title">About Us</h2>
                  <p className="about__description">Welcome to Dream Catcher, the ultimate live casino experience where the excitement never ends! Our game combines the best of three classic casino favorites – Roulette, Poker, and a thrilling Slot-style Matching Game – all in one seamless, immersive platform.</p>
                  <button class="button animation" type="button">
                    <span class="text">Play Now</span>
                  </button>
                </div>
              </div>
            <div className='about__slider'>
                <img
                    src={slideImages[currentSlide].image}
                    alt={`slide${currentSlide + 1}`}
                    className="slider__picture"
                />
            </div>
        </section>
    )
}

export default About;
