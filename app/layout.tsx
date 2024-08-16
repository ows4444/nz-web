'use client';

import type React from 'next';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/themes';
import GlobalStyle from '../styles/global';
import StyledComponentsRegistry from '@lib/registry';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body>
      <StyledThemeProvider theme={lightTheme}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </StyledThemeProvider>
    </body>
  </html>
);
export default Layout;
