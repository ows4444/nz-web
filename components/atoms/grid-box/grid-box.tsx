'use client';

import { MediaSizes, Theme } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

export interface GridBoxProps extends React.HTMLAttributes<HTMLElement> {
  $fit?: boolean;
  $columns?: number;
  $rows?: number;
  $gap?: number;
  theme?: Theme;
  $autoRows?: 'auto' | 'minmax' | 'max-content' | 'min-content' | 'auto-fit' | 'auto-fill';
  $autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
}

const GridBoxStyled = styled.div<GridBoxProps>`
  display: grid;
  grid-template-columns:  ${({ $fit, $columns, theme }) => ($fit ? `repeat(auto-fit, minmax(${theme.mediaSizes[MediaSizes.sm]}, ${theme.mediaSizes[MediaSizes.xxl]}));` : `repeat(${$columns || 1}, 1fr);`)} 
  grid-template-rows: repeat(${({ $rows }) => $rows || 1}, 1fr);
  gap: ${({ $gap }) => $gap || 0}px;
  grid-auto-rows: ${({ $autoRows }) => $autoRows || 'auto'};
  grid-auto-flow: ${({ $autoFlow }) => $autoFlow || 'row'};
`;

const GridBox: React.FC<GridBoxProps> = ({ children, ...rest }) => <GridBoxStyled {...rest}>{children}</GridBoxStyled>;

export default GridBox;
