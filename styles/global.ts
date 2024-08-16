import { createGlobalStyle } from 'styled-components';
import { lightTheme } from './themes';

const GlobalStyle = createGlobalStyle<{ theme?: typeof lightTheme; name?: string }>`
  * {
      box-sizing: border-box;
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
