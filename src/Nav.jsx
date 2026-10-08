import React from 'react';
import PopcornLogo from './Assets/popcorn__logo.jpg';

const Nav = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <img className="logo" src={PopcornLogo} alt="My Logo"/>
            </div>
            <nav className="nav__buttons">
                <a href="/" className="nav__button animated-underline"> Home</a>
                <a href="#movie" className="nav__button animated-underline no-cursor"> Find a Movie</a>
                <a href="#contact" className="nav__button nav__button--primary no-cursor"> Contact</a>
            </nav>
        </header>
    );
}

export default Nav;