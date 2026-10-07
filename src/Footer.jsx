import popcornLogo from './Assets/popcorn__logo.jpg'
import React from 'react';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__container">
                <figure>
                    <img class="footer__logo" src={popcornLogo} alt="popcornLogo" />
                </figure>
                <div class="footer__info">
                    <p>Copyright © 2026 Sarah Williams</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;