'use client';

import { Theme } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';
import Input from '@components/core/atoms/input/input';
import Label from '@components/core/atoms/label/label';

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

export interface InputGroupProps extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
  label: string;
  name: string;
  feedBack?: string;
  inputType: InputType;
}

const InputGroupStyled = styled.label<Omit<InputGroupProps, 'name' | 'HtmlFor' | 'label' | 'inputType'>>``;

const InputGroup: React.FC<InputGroupProps> = ({ label }) => {
  return (
    <InputGroupStyled>
      <Label htmlFor='' content={label}  />
      <Input title={'Title'} />
    </InputGroupStyled>
  );
};

export default InputGroup;
