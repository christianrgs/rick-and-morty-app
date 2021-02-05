import { createGlobalStyle } from 'styled-components';

import homeBackground from '../assets/home-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #1E1E1E url(${homeBackground}) no-repeat 50% top;
    -webkit-font-smootthing: antialiased;
  }

  body, input, button {
    font: 16px 'Nunito', sans-serif;
  }

  #root {
    max-width: 968px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
