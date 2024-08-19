'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface H4Props extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const H4Styled = styled.h4<H4Props>`
  display: flex;
`;

const H4: React.FC<H4Props> = ({ children, ...rest }: H4Props) => <H4Styled {...rest}>{children}</H4Styled>;

export default H4;
