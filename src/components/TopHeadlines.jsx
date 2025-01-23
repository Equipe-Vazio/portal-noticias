import React from 'react';
import { Box, Container, Stack, Typography, Button } from '@mui/material';


export default function TopHeadlines({ article }) {
  return (
    <div className="hero" key={article.author}>
  
      <Box
        sx={{
          backgroundImage: `url(${article.urlToImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: { xs: '40vh', sm: '60vh' }, 
          borderRadius: '12px',
          position: 'relative',
          overflow: 'hidden',
          mb: 3,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)', 
            zIndex: 1,
          }}
        ></Box>
      </Box>

      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 2,
            px: { xs: 2, sm: 4 },
          }}
        >
         
          <Typography
            variant="h4"
            sx={{
              color: 'var(--terciary)', 
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: { xs: '1.5rem', sm: '2.5rem' }, 
              zIndex: 2,
            }}
          >
            {article.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'var(--secondary)',
              fontFamily: 'Poppins',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              zIndex: 2,
            }}
          >
            {article.description || 'Descrição não disponível.'}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#aaa',
              fontFamily: 'Poppins',
              fontSize: '0.8rem',
              zIndex: 2,
            }}
          >
            Publicado em: {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#63231e',
              borderRadius: '20px',
              px: 4,
              textTransform: 'none',
              zIndex: 2,
            }}
          >
            Saiba Mais
          </Button>
        </Box>
      </Container>
    </div>
  );
}
