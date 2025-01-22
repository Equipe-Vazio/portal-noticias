import React from 'react';
import { Container, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header';

const markdownContent = `Insira o Markdown aqui`;

const Sobre = () => {
  return (<>
    <Header />
    <Container>
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
  </Container>
  </>
  );
};

export default Sobre;