'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type TableProps = Layout<ComponentProps<'table'>>;

const TableStyled = styled.table<TableProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.TABLE, props)};
`;

const Table: FC<TableProps> = (props) => <TableStyled {...props} />;

export default Table;
