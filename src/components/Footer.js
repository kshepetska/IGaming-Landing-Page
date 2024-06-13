import React from 'react';
import { useForm } from 'react-hook-form';
import Facebook from '../images/icons/social/facebook.svg';
import Twitter from '../images/icons/social/twitter.svg';
import linkedin from '../images/icons/social/linkedin.svg';

import '../styles/Footer.scss';

function Footer() {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        reset();
    };

    return (
        <footer className="footer" id='contact'>
            <div className='footer__content'>
              <div className="footer__form-container">
                <h3 className="footer__title title">Contact with us</h3>
                <form className="footer__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className='footer__form-inputs'>
                      <input 
                        className="footer__input animation" 
                        type="text" 
                        placeholder="Name" 
                        {...register('name', { 
                            required: 'Name is required'
                        })}
                      />
                      <input 
                        className="footer__input animation" 
                        type="email" 
                        placeholder="Email" 
                        {...register('email', { 
                            required: 'Email is required', 
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Email address is invalid'
                            } 
                        })}
                      />
                    </div>
                    <textarea 
                      className="footer__input animation" 
                      placeholder="Message"
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.name && <p className="error">{errors.name.message}</p>}
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    {errors.message && <p className="error">{errors.message.message}</p>}
                    <button className="footer__button button animation" type="submit">Send</button>
                </form>
              </div>
            <div className="footer__social-container">
                <h3 className="footer__social-title title">Follow us</h3>
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
            </div>
        </footer>
    );
}

export default Footer;
