'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface H1Props extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const H1Styled = styled.h1<H1Props>``;

const H1: React.FC<H1Props> = ({ children, ...rest }: H1Props) => <H1Styled {...rest}>{children}</H1Styled>;

export default H1;
