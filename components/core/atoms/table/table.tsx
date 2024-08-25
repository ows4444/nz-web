'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface TableProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const TableStyled = styled.table<TableProps>``;

const Table: FC<TableProps> = ({ children, ...rest }) => <TableStyled {...rest}>{children}</TableStyled>;

/**
 * DONE
 */
export default Table;
