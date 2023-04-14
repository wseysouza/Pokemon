import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DetailsPokemon } from '../pages/DetailsPokemon';

export function RoutesApp() {
  return (
    <Routes>
      <Route path='/' Component={Home} exact />
      <Route path='/pokemon' Component={DetailsPokemon} />
    </Routes>
  );
}

