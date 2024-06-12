import Facebook from '../images/icons/social/facebook.svg';
import Twitter from '../images/icons/social/twitter.svg';
import linkedin from '../images/icons/social/linkedin.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__form-container">
                <h3 className="footer__title">Contact with us</h3>
                <form className="footer__form">
                    <input className="footer__input" type="text" placeholder="Name"/>
                    <input className="footer__input" type="email" placeholder="Email"/>
                    <textarea className="footer__input" placeholder="Message"></textarea>
                    <button className="footer__button">Send</button>
                </form>
            </div>
            <div className="footer__social-container">
                <h3 className="footer__title">Follow us</h3>
                <ul className="footer__social-list">
                    <li className="footer__social-item">
                        <a href="https://www.facebook.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                          <img src={Facebook} alt="facebook" className="footer__social-image"/>
                        </a>
                    </li>
                    <li className="footer__social-item">
                        <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                          <img src={Twitter} alt="twitter" className="footer__social-image"/>
                        </a>
                    </li>
                    <li className="footer__social-item">
                        <a href="https://www.linkedin.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                          <img src={linkedin} alt="linkedin" className="footer__social-image"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;