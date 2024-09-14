'use client';

import { Theme } from '@styles/theme';
import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { Input, Label, Div, Small } from '@components/core/atoms';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type InputGroupProps = Layout<ComponentProps<'div'>> & {
  label: string;
  name: string;
  feedBack?: string;
  autoComplete?: 'on' | 'off' | 'type-of-value';
  type: 'text' | 'email' | 'password' | 'number';
};

const InputGroupStyled = styled(Div)<InputGroupProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.INPUT_GROUP, props)};
`;

const InputGroup: React.FC<InputGroupProps> = ({ $layout, ...props }) => {
  let layoutValue: 'grid-item' | 'flex-item' | undefined;
  if ($layout === 'grid') {
    layoutValue = 'grid-item';
  } else if ($layout === 'flex') {
    layoutValue = 'flex-item';
  } else {
    layoutValue = undefined;
  }

  return (
    <InputGroupStyled $layout={$layout} {...props}>
      <Label $layoutItem={layoutValue} htmlFor={props.name} content={props.label} />
      <Input id={props.name} name={props.name} type={props.type} autoComplete={props.autoComplete ?? 'off'} />
      {props.feedBack && <Small content={props.feedBack} />}
    </InputGroupStyled>
  );
};

export default InputGroup;
