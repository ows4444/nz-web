'use client';

import type React from 'next';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import { lightTheme } from '@styles/themes';

import StyledComponentsRegistry from './registry';

const StyledComponentProvider = ({ children }: { children: React.ReactNode }) => (
	<StyledThemeProvider theme={lightTheme}>
		<StyledComponentsRegistry>
			<GlobalStyle />
			{children}
		</StyledComponentsRegistry>
	</StyledThemeProvider>
);
export default StyledComponentProvider;
