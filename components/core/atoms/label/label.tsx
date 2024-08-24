'use client';

import { Size, Sizes, Theme, Variant, Variants } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  $variant: Variant;
  theme?: Theme;
  HtmlFor: string;
  title: string;
  $size?: Size;
  $gridArea?: string;
}

const LabelStyled = styled.label<Omit<LabelProps, 'title' | 'HtmlFor'>>`
  padding: 8px 8px;
  font-size: 16px;

  
`;

const Label: React.FC<Omit<LabelProps, '$theme'>> = ({
  $variant = Variants.Default,
  $size = Sizes.MD,
  HtmlFor,
  title,
  ...rest
}) => (
  <LabelStyled $variant={$variant} $size={$size} htmlFor={HtmlFor} {...rest}>
    {title}
  </LabelStyled>
);

export default Label;
