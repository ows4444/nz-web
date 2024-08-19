'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface H5Props extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const H5Styled = styled.h5<H5Props>`
  display: flex;
`;

const H5: React.FC<H5Props> = ({ children, ...rest }: H5Props) => <H5Styled {...rest}>{children}</H5Styled>;

export default H5;
