'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme, Variants } from '@styles/theme';

interface AProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
}

interface ThemeProps {
  theme: Theme;
  variant: Variants;
}

const AStyled = styled.a<Partial<ThemeProps>>`
  color: ${({ theme, variant = Variants.Primary }) => theme.palette[variant]};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const A: FC<AProps & Omit<Partial<ThemeProps>, 'theme'>> = ({ title, children, ...rest }) => (
  <AStyled {...rest}>
    {title}
    {children}
  </AStyled>
);

/**
 * DONE
 */
export default A;
