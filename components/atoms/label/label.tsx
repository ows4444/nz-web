'use client';

import { Sizes, Theme, Variant, Variants } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  $variant: Variant;
  theme?: Theme;
  HtmlFor: string;
  title: string;
  $size?: Sizes;
  $gridArea?: string;
}

const LabelStyled = styled.label<Omit<LabelProps, 'title' | 'HtmlFor'>>`
  padding: 8px 8px;
  font-size: 16px;

  ${({ $gridArea }) => $gridArea && `grid-area: ${$gridArea};`}
`;

const Label: React.FC<Omit<LabelProps, '$theme'>> = ({
  $variant = Variants.Default,
  $size = Sizes.Default,
  HtmlFor,
  title,
  ...rest
}) => (
  <LabelStyled $variant={$variant} $size={$size} htmlFor={HtmlFor} {...rest}>
    {title}
  </LabelStyled>
);

export default Label;
