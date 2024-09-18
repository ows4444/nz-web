import { Decorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import * as Themes from '../styles/themes';

export const withTheme: Decorator = (StoryFn, context) => {
	const theme = context.parameters.theme || context.globals.theme;
	const themes = Object.keys(Themes).reduce((acc: any, key: string) => {
		const theme = Themes[key];
		const themeName = key.toLowerCase().replace('theme', '');
		acc[themeName] = theme;
		return acc;
	}, {});
	const storyTheme = themes[theme];

	switch (theme) {
		case 'side-by-side': {
			return (
				<div className="body">
					{Object.entries(themes).map(([key, theme]: [string, any]) => (
						<StyledThemeProvider key={key} theme={theme}>
							<span className={'theme-' + key}>
								<GlobalStyle name={key} />
								{StoryFn()}
							</span>
						</StyledThemeProvider>
					))}
				</div>
			);
		}
		default: {
			return (
				<div className="body">
					<StyledThemeProvider theme={storyTheme}>
						<span className={'theme-' + theme}>
							<GlobalStyle name={theme} />
							{StoryFn()}
						</span>
					</StyledThemeProvider>
				</div>
			);
		}
	}
};

const themeNames = Object.keys(Themes).map((key) => key.toLowerCase().replace('theme', ''));

const toolbarItems = themeNames.map((theme) => ({
	value: theme,
	icon: 'circle',
	title: theme
}));
toolbarItems.push({ value: 'side-by-side', icon: 'sidebar', title: 'side by side' });

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Theme for the components',
		defaultValue: themeNames[0],
		toolbar: {
			icon: 'circlehollow',
			items: toolbarItems,
			showName: true
		}
	}
};

export const decorators = [withTheme];
