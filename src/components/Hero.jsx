// Hero.js
import React, { useState } from 'react';

const Hero = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Encontre o que você precisa</h1>
        <div style={styles.searchContainer}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busque por notícias..."
            style={styles.input}
          />
          <button onClick={handleSearch} style={styles.button}>
            Pesquisar
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#520000',
    color: '#fff',
    height: '400px',
    padding: '20px',
  },
  content: {
    maxWidth: '600px',
    width: '100%',
  },
  title: {
    fontSize: '36px',
    margin: '0 0 10px',
  },
  subtitle: {
    fontSize: '18px',
    margin: '0 0 20px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '20px 0 0 10px',
    outline: 'none',
    maxWidth: '400px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
};

export default Hero;
