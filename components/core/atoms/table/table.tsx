'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface TableProps extends ComponentProps<'table'> {
  children?: ReactNode;
}

const TableStyled = styled.table<TableProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.TABLE)};
`;

const Table: FC<TableProps> = (props) => <TableStyled {...props} />;

/**
 * DONE
 */
export default Table;
