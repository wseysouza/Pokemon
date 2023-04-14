import React from 'react';

import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

export function ButtonHome() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/")
  }
  return (
    <Container onClick={handleHome}>
      Home
    </Container>
  );
}

