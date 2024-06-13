import '../styles/Header.scss';

import Chip from '../images/icons/chip.png';
import Image from '../images/header-img.png';

const ChipCoins = [
    {
        id: 1,
        title: 'Join us foor free'
    },
    {
        id: 2,
        title: 'Get your bonus'
    },
    {
        id: 3,
        title: 'Play and win big'
    }
]

function Header() {
    return (
        <header className="header">
            <div className='header__overlay'></div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home">Home</a></li>
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#features">Features</a></li>
                    <li className="nav-item"><a href="#contact">Contacts</a></li>
                </ul>
            </nav>
            <div className='header__content'>
              <img src={Image} alt="header" className="header__image"/>
              <h1 className="title">Dream Catcher</h1>
                <a href="#about" class="button animation">
                  <span class="text">Learn More</span>
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