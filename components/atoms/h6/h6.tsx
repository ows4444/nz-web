'use client';

import { Size, Sizes, Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface H6Props extends React.HTMLAttributes<HTMLElement> {
  $size: Size;
  theme?: Theme;
}

const H6Styled = styled.h6<H6Props>`
  display: flex;
`;

const H6: React.FC<H6Props> = ({ $size = Sizes.Default, children, ...rest }: H6Props) => (
  <H6Styled $size={$size} {...rest}>
    {children}
  </H6Styled>
);

export default H6;