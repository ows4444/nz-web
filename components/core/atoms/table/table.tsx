'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type TableProps = Layout<ComponentProps<'table'>>;

const TableStyled = styled.table<TableProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.TABLE, props)};
`;

const Table: FC<TableProps> = (props) => <TableStyled {...props} />;

export default Table;
