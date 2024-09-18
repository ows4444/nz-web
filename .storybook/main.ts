import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../components/**/*.mdx', '../components/**/*.@(stories|story).@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'storybook-addon-pseudo-states',
		'storybook-addon-responsive-views'
	],
	framework: {
		name: '@storybook/nextjs',
		options: {}
	},
	staticDirs: ['../public'],
	typescript: {
		check: true
	}
};
export default config;
