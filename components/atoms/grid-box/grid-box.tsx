'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';

export type GridBox = {
  $columns?: number;
  $rows?: number;
  $autoRows?: 'auto' | 'minmax' | 'max-content' | 'min-content' | 'auto-fit' | 'auto-fill';
  $autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
};

export interface GridBoxProps extends GridBox, ComponentProps<'div'> {}

const GridBoxStyled = styled.div<GridBoxProps & { theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns || 1}, 1fr);
  grid-template-rows: repeat(${({ $rows }) => $rows || 1}, 1fr);
  grid-auto-rows: ${({ $autoRows = 'auto' }) => $autoRows};
  grid-auto-flow: ${({ $autoFlow = 'row' }) => $autoFlow};
`;

const GridBox: FC<GridBoxProps> = (props) => <GridBoxStyled {...props} />;

/**
 * DONE
 */

export default GridBox;
