import React from 'react';

const Nav = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <img className="logo" src="./Assets/popcorn__logo.jpg" alt="My Logo"/>
            </div>
            <nav className="nav__buttons">
                <a href="#home" className="nav__button animated-underline"> Home</a>
                <a href="#movie" className="nav__button animated-underline"> Find a Movie</a>
                <a href="#contact" className="nav__button nav__button--primary"> Contact</a>
            </nav>
        </header>
    );
}

export default Nav;