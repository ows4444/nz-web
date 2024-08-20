'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface AProps extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const H1Styled = styled.a<AProps>``;

const H1: React.FC<AProps> = ({ children, ...rest }: AProps) => <H1Styled {...rest}>{children}</H1Styled>;

export default H1;
