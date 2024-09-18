'use client';

import { ComponentProps } from 'react';
import type React from 'next';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Layout } from '@styles/theme/types';

type RowProps = Layout<ComponentProps<'section'>>;

const RowStyled = styled.section<RowProps & { theme: Theme }>`
	display: flex;
`;

const Row: React.FC<RowProps> = ({ children }: RowProps) => <RowStyled>{children}</RowStyled>;

export default Row;
