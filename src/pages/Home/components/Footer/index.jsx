import React from 'react';

import { Container } from './styles';
import { IoCaretBackOutline, IoCaretForward } from 'react-icons/io5';

export function Footer({ onClickBack, onClickNext, showButtonBack, showButtonNext }) {
  return (
    <Container>
      <button onClick={onClickBack}>
        {showButtonBack !== null ? <IoCaretBackOutline size={50} /> : null}
      </button>
      <button onClick={onClickNext}>
        {showButtonNext !== null ? <IoCaretForward size={50} /> : null}
      </button>
    </Container>
  )
}
