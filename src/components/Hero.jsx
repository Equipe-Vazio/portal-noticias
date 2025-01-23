// Hero.js
import React, { useState } from 'react';

const Hero = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Por favor, insira um termo para busca.');
      return;
    }
    setError(null);

    const apiKey = 'process.env.VITE_API_KEY'; 
    const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      query
    )}&apiKey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados na API.');
      }
      const data = await response.json();
      setResults(data.articles);
    } catch (err) {
      setError(err.message);
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
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.results}>
          {results.length > 0 ? (
            results.map((article, index) => (
              <div key={index} style={styles.article}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Ler mais
                </a>
              </div>
            ))
          ) : (
            <p style={styles.noResults}>
              {results.length === 0 && query && 'Nenhum resultado encontrado.'}
            </p>
          )}
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
  error: {
    color: 'red',
    marginTop: '10px',
  },
  results: {
    marginTop: '20px',
    textAlign: 'left',
  },
  article: {
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  noResults: {
    marginTop: '20px',
  },
};

export default Hero;
