import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) {
      setError('Por favor, insira um termo para busca.');
      return;
    }
    setError(null);
    
    navigate(`/resultados?query=${encodeURIComponent(query)}`);
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
        {error && <p style={styles.error}>{error}</p>}
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
    minHeight: '400px',
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
    borderRadius: '20px 0 0 20px',
    outline: 'none',
    maxWidth: '400px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    borderRadius: '0 20px 20px 0',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default Hero;
