'use client';

import { Theme } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

import FlexBox from '@components/atoms/flex-box/flex-box';
import { useViewportSize } from 'hooks';
import Label from '@components/core/atoms/label/label';
import Input from '@components/core/atoms/input/input';
import Span from '@components/core/atoms/span/span';

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

const InputGroup: React.FC<InputGroupProps> = ({ label, name, feedBack }) => {
  const { size } = useViewportSize();

  return (
    <InputGroupStyled>
      <FlexBox
        $justifyContent="space-between"
        $alignItems="center"
        $direction={['xs', 'sm'].includes(size) ? 'column' : 'row'}
      >
        <Label title={label} content={name} />
        <FlexBox $direction="column">
          <Input title={'Title'} />
          {feedBack && <Span>{feedBack}</Span>}
        </FlexBox>
      </FlexBox>
    </InputGroupStyled>
  );
};

export default InputGroup;
