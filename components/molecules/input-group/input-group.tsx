'use client';

import { Sizes, Theme, Variant, Variants } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

import Input from '@components/atoms/input/input';
import Label from '@components/atoms/label/label';
import Span from '@components/atoms/span/span';
import FlexBox from '@components/atoms/flex-box/flex-box';
import { useViewportSize } from 'hooks';

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
  | 'hidden'
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
  $variant: Variant;
  theme?: Theme;
  label: string;
  name: string;
  feedBack?: string;
  inputType: InputType;
  $size?: Sizes;
}

const InputGroupStyled = styled.label<Omit<InputGroupProps, 'name' | 'HtmlFor' | 'label' | 'inputType'>>``;

const InputGroup: React.FC<InputGroupProps> = ({
  $variant = Variants.Default,
  label,
  name,
  feedBack,
  inputType,
  $size = Sizes.Default,
}) => {
  const { size } = useViewportSize();

  return (
    <InputGroupStyled $variant={$variant}>
      <FlexBox $justifyContent="space-between" $direction={['xs', 'sm'].includes(size) ? 'column' : 'row'}>
        <Label title={label} $size={$size} HtmlFor={name} $variant={$variant} />
        <FlexBox $direction="column">
          <Input name={name} type={inputType} $variant={$variant} $size={$size} />
          {feedBack && (
            <Span $size={$size} $variant={$variant}>
              {feedBack}
            </Span>
          )}
        </FlexBox>
      </FlexBox>
    </InputGroupStyled>
  );
};

export default InputGroup;
