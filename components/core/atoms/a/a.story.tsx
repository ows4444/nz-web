import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import A from './a';
import { Variants } from '@styles/theme';

const AMeta: Meta<typeof A> = {
  component: A,
  title: 'Core/A',
  tags: ['autodocs'],
  argTypes: { 
    title: {
      control: { type: 'text' },
      description: 'The title of the button',
      name: 'Title',
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(Variants),
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the button',
      name: 'Content',
    },
  },
};

type AStory = StoryObj<typeof AMeta>;

export default AMeta;

export const Default: AStory = {
  args: {
    title: 'Default',
    onClick: action('clicked'),
  },
};

export const White: AStory = {
  args: {
    title: 'White',
    onClick: action('clicked'),
  },
};

export const Black: AStory = {
  args: {
    title: 'Black',
    onClick: action('clicked'),
  },
};
export const Error: AStory = {
  args: {
    title: 'Error',
    onClick: action('clicked'),
  },
};

export const Info: AStory = {
  args: {
    title: 'Info',
    onClick: action('clicked'),
  },
};

export const Primary: AStory = {
  args: {
    title: 'Primary',
    onClick: action('clicked'),
  },
};

export const Secondary: AStory = {
  args: {
    title: 'Secondary',
    onClick: action('clicked'),
  },
};

export const Warning: AStory = {
  args: {
    title: 'Warning',
    children: 'Warning',
    onClick: action('clicked'),
  },
};

export const Success: AStory = {
  args: {
    title: 'Success',
    onClick: action('clicked'),
  },
};
