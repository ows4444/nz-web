'use client';

import { Size, Sizes, Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface H2Props extends React.HTMLAttributes<HTMLElement> {
  $size: Size;
  theme?: Theme;
}

const H2Styled = styled.h2<H2Props>`
  display: flex;
`;

const H2: React.FC<H2Props> = ({ $size = Sizes.Default, children, ...rest }: H2Props) => (
  <H2Styled $size={$size} {...rest}>
    {children}
  </H2Styled>
);

export default H2;
