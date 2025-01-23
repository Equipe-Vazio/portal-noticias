// Header.js
import React from 'react';

const Header = () => {
  return (
    <>
    <header className="navbar">
    <p><strong>Portal de noticias</strong></p>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
        </ul>
    </nav>
  </header>
    </>
  );
};

export default Header;
