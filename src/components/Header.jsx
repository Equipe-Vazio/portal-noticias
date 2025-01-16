// Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Portal de Notícias</h1>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>Home</a>
        <a href="/about" style={styles.link}>Sobre</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#520000',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Header;
