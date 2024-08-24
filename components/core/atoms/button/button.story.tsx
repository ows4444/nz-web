import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';
import { Variants } from '@styles/theme';

const ButtonMeta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    $variant: {
      control: { type: 'select' },
      options: Object.values(Variants),
    },
  },
};

type ButtonStory = StoryObj<typeof ButtonMeta>;

export default ButtonMeta;

export const Default: ButtonStory = {
  args: {
    title: 'Default',
    $variant: Variants.Default,
    onClick: action('clicked'),
  },
};

export const White: ButtonStory = {
  args: {
    title: 'White',
    $variant: Variants.White,
    onClick: action('clicked'),
  },
};

export const Black: ButtonStory = {
  args: {
    title: 'Black',
    $variant: Variants.Black,
    onClick: action('clicked'),
  },
};
export const Error: ButtonStory = {
  args: {
    title: 'Error',
    $variant: Variants.Error,
    onClick: action('clicked'),
  },
};

export const Info: ButtonStory = {
  args: {
    title: 'Info',
    $variant: Variants.Info,
    onClick: action('clicked'),
  },
};

export const Primary: ButtonStory = {
  args: {
    title: 'Primary',
    $variant: Variants.Primary,
    onClick: action('clicked'),
  },
};

export const Secondary: ButtonStory = {
  args: {
    title: 'Secondary',
    $variant: Variants.Secondary,
    onClick: action('clicked'),
  },
};

export const Warning: ButtonStory = {
  args: {
    title: 'Warning',
    $variant: Variants.Warning,
    onClick: action('clicked'),
  },
};

export const Success: ButtonStory = {
  args: {
    title: 'Success',
    $variant: Variants.Success,
    onClick: action('clicked'),
  },
};
