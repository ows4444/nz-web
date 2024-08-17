import { createGlobalStyle } from 'styled-components';
import { lightTheme } from './themes';

const GlobalStyle = createGlobalStyle<{ theme?: typeof lightTheme; name?: string }>`
  * {
      box-sizing: border-box;
    }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
    
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


   body {
    font-family: 'Arial', sans-serif;  
    font-size: 16px;
    margin: 0;
    background-color: ${({ theme }) => theme.global.BackgroundColor};
    color: ${({ theme }) => theme.global.FontColor};
    padding: 0; 
  } 
  .theme-${({ name }) => name} {
      background-color: ${({ theme }) => theme.global.BackgroundColor};
      color: ${({ theme }) => theme.global.FontColor};
      padding: 50px 5px;
      border: 1px solid black;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
