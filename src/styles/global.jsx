import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.territory};
    color: ${colors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 500 20px "Open Sans", serif;
    border: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;
