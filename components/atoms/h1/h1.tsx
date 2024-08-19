'use client';

import { Size, Sizes, Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface H1Props extends React.HTMLAttributes<HTMLElement> {
  $size: Size;
  theme?: Theme;
}

const H1Styled = styled.h1<H1Props>`
  display: flex;
`;

const H1: React.FC<H1Props> = ({ $size = Sizes.Default, children, ...rest }: H1Props) => (
  <H1Styled $size={$size} {...rest}>
    {children}
  </H1Styled>
);

export default H1;
