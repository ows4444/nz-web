'use client';

import { Sizes, Variant, Variants } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  $size?: Sizes;
  $variant?: Variant;
  $gridArea?: string;
}

const SpanStyled = styled.span<SpanProps>`
  ${({ $gridArea }) => $gridArea && `grid-area: ${$gridArea};`}
`;

const Span: React.FC<SpanProps> = ({ children, $size = Sizes.Default, $variant = Variants.Default, ...rest }) => (
  <SpanStyled {...rest}>{children}</SpanStyled>
);

export default Span;
