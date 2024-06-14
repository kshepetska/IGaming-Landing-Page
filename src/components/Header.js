import React, { useState } from 'react';
import '../styles/Header.scss';

import Chip from '../images/icons/chip.png';
import Image from '../images/header-img.png';
import MenuBurger from '../images/icons/menu.png';
import Cross from '../images/icons/x.png';

const ChipCoins = [
    {
        id: 1,
        title: 'Join us for free'
    },
    {
        id: 2,
        title: 'Get your bonus'
    },
    {
        id: 3,
        title: 'Play and win big'
    }
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header" id='home'>
            <div className='header__overlay'></div>
            <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li className="nav-item"><a href="#about" onClick={closeMenu}>About</a></li>
                    <li className="nav-item"><a href="#features" onClick={closeMenu}>Features</a></li>
                    <li className="nav-item"><a href="#contact" onClick={closeMenu}>Contacts</a></li>
                </ul>
            </nav>
            <button className="burger-menu" onClick={toggleMenu}>
                <img src={menuOpen ? Cross : MenuBurger} alt="menu" className={`burger-menu__image ${menuOpen ? 'cross' : ''}`}/>
            </button>
            <div className='header__content'>
              <img src={Image} alt="header" className="header__image"/>
              <h1 className="title header__title">Dream Catcher</h1>
                <a href="#about" className="button animation">
                  <span className="text">Learn More</span>
                </a>
              <div className="chip-coins">
                {ChipCoins.map(chip => (
                    <div key={chip.id} className="chip-coins__item">
                        <img src={Chip} alt="chip" className="chip-coins__image"/>
                        <h3 className="chip-coins__title">{chip.title}</h3>
                    </div>
                ))}
              </div>
            </div>
        </header>
    );
}

export default Header;
