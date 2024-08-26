'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import { ComponentProps } from 'react';
import styled from 'styled-components';

export interface RowProps extends ComponentProps<'section'> {}

const RowStyled = styled.section<RowProps & { theme: Theme }>`
  display: flex;
`;

const Row: React.FC<RowProps> = ({ children }: RowProps) => <RowStyled>{children}</RowStyled>;

export default Row;
