'use client';

import type React from 'next';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/themes';
import GlobalStyle from '../styles/global';
import StyledComponentsRegistry from '@lib/registry';

const StyledComponentProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('StyledComponentProvider', lightTheme);

  // return <>{children}</>;

  return (
    <StyledThemeProvider theme={lightTheme}>
      <StyledComponentsRegistry>
        <GlobalStyle />
        {children}
      </StyledComponentsRegistry>
    </StyledThemeProvider>
  );
};
export default StyledComponentProvider;
