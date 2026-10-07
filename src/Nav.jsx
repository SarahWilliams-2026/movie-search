import React from 'react';

const Nav = () => {
    return (
        <header class="navbar">
            <div class="logo">
                <img class="logo" src="./Assets/popcorn__logo.jpg" alt="My Logo"/>
            </div>
            <nav class="nav__buttons">
                <a href="#home" class="nav__button animated-underline"> Home</a>
                <a href="#movie" class="nav__button animated-underline"> Find a Movie</a>
                <a href="#contact" class="nav__button nav__button--primary"> Contact</a>
            </nav>
        </header>
    );
}

export default Nav;