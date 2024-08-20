'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface PProps extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const H1Styled = styled.p<PProps>``;

const H1: React.FC<PProps> = ({ children, ...rest }: PProps) => <H1Styled {...rest}>{children}</H1Styled>;

export default H1;
