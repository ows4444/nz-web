'use client';

import { Size, Sizes, Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface ColumnProps extends React.HTMLAttributes<HTMLElement> {
  $size: Size;
  theme?: Theme;
}

const ColumnStyled = styled.section<ColumnProps>``;

const Column: React.FC<ColumnProps> = ({ $size = Sizes.MD, children, ...rest }: ColumnProps) => (
  <ColumnStyled $size={$size} {...rest}>
    {children}
  </ColumnStyled>
);

export default Column;
