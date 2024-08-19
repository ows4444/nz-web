'use client';

import { Size, Sizes, Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface H5Props extends React.HTMLAttributes<HTMLElement> {
  $size: Size;
  theme?: Theme;
}

const H5Styled = styled.h5<H5Props>`
  display: flex;
`;

const H5: React.FC<H5Props> = ({ $size = Sizes.Default, children, ...rest }: H5Props) => (
  <H5Styled $size={$size} {...rest}>
    {children}
  </H5Styled>
);

export default H5;