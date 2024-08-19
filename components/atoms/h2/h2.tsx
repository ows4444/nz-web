'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface H2Props extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const H2Styled = styled.h2<H2Props>``;

const H2: React.FC<H2Props> = ({ children, ...rest }: H2Props) => <H2Styled {...rest}>{children}</H2Styled>;

export default H2;
