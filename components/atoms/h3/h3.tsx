'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface H3Props extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const H3Styled = styled.h3<H3Props>`
  display: flex;
`;

const H3: React.FC<H3Props> = ({ children, ...rest }: H3Props) => <H3Styled {...rest}>{children}</H3Styled>;

export default H3;
