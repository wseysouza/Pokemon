import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RoutesApp } from './routes';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Container } from './styles/theme';

export function App() {
  return (
    <Container>
      <Header />
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
      <GlobalStyle />
    </Container>
  )
}
