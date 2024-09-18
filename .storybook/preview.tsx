import { Preview } from '@storybook/react';

import { globalTypes, withTheme } from './theme';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	globalTypes,
	decorators: [withTheme]
};

export default preview;
