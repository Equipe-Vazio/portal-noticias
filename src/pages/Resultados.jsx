import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

const Results = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      const apiKey = process.env.VITE_API_KEY;
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

    fetchResults();
  }, [query]);

  return (
    <>
    <Header />
    <section style={styles.resultsPage}>
      <h1 style={styles.title}>Resultados para: "{query}"</h1>
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
            Nenhum resultado encontrado. Tente outra busca.
          </p>
        )}
      </div>
    </section>
    </>
  );
};

const styles = {
    resultsPage: {
        padding: '20px',
        color: '#333',
        minHeight: '100vh',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
    results: {
        marginTop: '20px',
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
    fontSize: '18px',
    textAlign: 'center',
},
};

export default Results;
