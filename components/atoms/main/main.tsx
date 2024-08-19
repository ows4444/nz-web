'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface MainProps extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const H1Styled = styled.main<MainProps>`
  display: flex;
`;

const H1: React.FC<MainProps> = ({ children, ...rest }: MainProps) => <H1Styled {...rest}>{children}</H1Styled>;

export default H1;
