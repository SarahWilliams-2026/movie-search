import popcornLogo from './Assets/popcorn__logo.jpg'
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <figure>
                    <img className="footer__logo" src={popcornLogo} alt="popcornLogo" />
                </figure>
                <div className="footer__info">
                    <p>Copyright © 2026 Sarah Williams</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;