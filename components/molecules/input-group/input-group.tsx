'use client';

import { Theme } from '@styles/theme';
import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import Input from '@components/core/atoms/input/input';
import Label from '@components/core/atoms/label/label';
import Div from '@components/core/atoms/div/div';
import Small from '@components/core/atoms/small/small';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';

type InputType =
  | 'button'
  | 'input'
  | 'radio'
  | 'checkbox'
  | 'file'
  | 'image'
  | 'reset'
  | 'submit'
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'color'
  | 'range'
  | 'search'
  | 'hidden';

type InputGroupProps = Layout<ComponentProps<'div'>> & {
  label: string;
  name: string;
  feedBack?: string;
  type: InputType;
  autoComplete?: 'on' | 'off' | 'type-of-value';
};

const InputGroupStyled = styled(Div)<InputGroupProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.INPUT_GROUP, props)};
`;

const InputGroup: React.FC<InputGroupProps> = (props) => {
  return (
    <InputGroupStyled {...props}>
      <Label htmlFor={props.name} content={props.name} />
      <Input id={props.name} name={props.name} type={props.type} autoComplete={props.autoComplete || 'off'} />
      {props.feedBack && <Small content={props.feedBack} />}
    </InputGroupStyled>
  );
};

export default InputGroup;
