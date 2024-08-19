'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface H6Props extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const H6Styled = styled.h6<H6Props>`
  display: flex;
`;

const H6: React.FC<H6Props> = ({ children, ...rest }: H6Props) => <H6Styled {...rest}>{children}</H6Styled>;

export default H6;
