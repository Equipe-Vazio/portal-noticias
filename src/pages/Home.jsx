import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';
import Loading from '../components/Loading';
import Header from '../components/Header';
import TopHeadlines from '../components/TopHeadlines';
import Hero from '../components/Hero';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const API_KEY ='5151818d9f934e0dae6cac85d762facb'; 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    
   const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Erro ao buscar artigos de notícias:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading foto='./loading.png' />
      ) : (
        <main>
          <Header />
         
        <div>
          <Carousel
            className='carousel'
            sx={{
              width: '100%',
              margin: '0 auto',
              textAlign: 'center',
            }}
            animation='slide'
            autoPlay={true}
            navButtonsAlwaysVisible={false}
            indicatorIconButtonProps={{
              style: {
                color: 'var(--secondary)',
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: 'var(--terciary)',
              },
            }}
          >
            {articles.map((article, index) => (
              <div key={index}>
                <TopHeadlines article={article} />
              </div>
            ))}
          </Carousel>
        </div>
        <Hero />
        </main>
      )}
    </>
  );
}
