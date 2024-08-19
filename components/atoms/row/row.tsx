'use client';

import { Size, Sizes, Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface RowProps extends React.HTMLAttributes<HTMLElement> {
  $size: Size;
  theme?: Theme;
}

const RowStyled = styled.section<RowProps>`
  display: flex;
`;

const Row: React.FC<RowProps> = ({ $size = Sizes.Default, children, ...rest }: RowProps) => (
  <RowStyled $size={$size} {...rest}>
    {children}
  </RowStyled>
);

export default Row;
