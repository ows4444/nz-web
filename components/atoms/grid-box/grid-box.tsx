'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';

export interface GridBoxProps extends ComponentProps<'div'> {
  $columns: number;
  $rows: number;
  $gap?: number;
  $autoRows?: 'auto' | 'minmax' | 'max-content' | 'min-content' | 'auto-fit' | 'auto-fill';
  $autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  children?: ReactNode;
}

const GridBoxStyled = styled.div<GridBoxProps & { theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns || 1}, 1fr);
  grid-template-rows: repeat(${({ $rows }) => $rows || 1}, 1fr);
  gap: ${({ $gap = 0 }) => $gap}px;
  grid-auto-rows: ${({ $autoRows = 'auto' }) => $autoRows};
  grid-auto-flow: ${({ $autoFlow = 'row' }) => $autoFlow};
`;

const GridBox: FC<GridBoxProps> = (props) => <GridBoxStyled {...props} />;

/**
 * DONE
 */

export default GridBox;
