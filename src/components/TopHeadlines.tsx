import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

const API_KEY = process.env.REACT_APP_API_KEY || 'default_api_key';
const API_URL = process.env.REACT_APP_API_URL + '/v2/top-headlines' || 'https://default_api_url';

const TopHeadlines: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            apiKey: API_KEY,
            language: 'ptbr',
            sortBy: 'publishedAt',
            pageSize: 10,
          },
        });
        setArticles(response.data.articles);
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TopHeadlines;