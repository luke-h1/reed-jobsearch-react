/* eslint-disable */

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import {primaryFont, secondaryFont} from './typography';
export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  * { 
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 16px;
    box-sizing: border-box;

  }

  *, *:before, *:after  { 
    box-sizing: inherit
  }

  body { 
    font-family:${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;  
  }

  h1,
  h2,
  h3 { 
    font-family: ${secondaryFont};

  }
`;
