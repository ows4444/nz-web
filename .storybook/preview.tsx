import { globalTypes, withTheme } from './theme';
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes,
  decorators: [withTheme],
};

export default preview;
