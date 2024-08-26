'use client';

import { Theme } from '@styles/theme';
import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import Input from '@components/core/atoms/input/input';
import Label from '@components/core/atoms/label/label';
import Div from '@components/core/atoms/div/div';

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

export interface InputGroupProps extends ComponentProps<typeof Div> {
  label: string;
  name: string;
  feedBack?: string;
  type: InputType;
}

const InputGroupStyled = styled(Div)<InputGroupProps & { theme: Theme }>``;

const InputGroup: React.FC<InputGroupProps> = (props) => {
  return (
    <InputGroupStyled {...props}>
      <Label htmlFor={props.name} content={props.name} />
      <Input type={props.type} />
    </InputGroupStyled>
  );
};

export default InputGroup;
