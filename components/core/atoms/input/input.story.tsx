import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './input';
import { Variants } from '@styles/theme';

const InputMeta: Meta<typeof Input> = {
  component: Input,
  title: 'Atoms/Input',
  tags: ['autodocs'],
  argTypes: {
    $variant: {
      control: { type: 'select' },
      options: Object.values(Variants),
    },
  },
};

type InputStory = StoryObj<typeof InputMeta>;

export default InputMeta;

export const Default: InputStory = {
  args: {
    $variant: Variants.Default,
    onClick: action('clicked'),
  },
};

export const Radio: InputStory = {
  args: {
    $variant: Variants.Default,
    type: 'radio',
    onClick: action('clicked'),
  },
};

export const White: InputStory = {
  args: {
    $variant: Variants.White,
    onClick: action('clicked'),
  },
};

export const Black: InputStory = {
  args: {
    $variant: Variants.Black,
    onClick: action('clicked'),
  },
};
export const Error: InputStory = {
  args: {
    $variant: Variants.Error,
    onClick: action('clicked'),
  },
};

export const Info: InputStory = {
  args: {
    $variant: Variants.Info,
    onClick: action('clicked'),
  },
};

export const Primary: InputStory = {
  args: {
    $variant: Variants.Primary,
    onClick: action('clicked'),
  },
};

export const Secondary: InputStory = {
  args: {
    $variant: Variants.Secondary,
    onClick: action('clicked'),
  },
};

export const Warning: InputStory = {
  args: {
    $variant: Variants.Warning,
    onClick: action('clicked'),
  },
};

export const Success: InputStory = {
  args: {
    $variant: Variants.Success,
    onClick: action('clicked'),
  },
};
