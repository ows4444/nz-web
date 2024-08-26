'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

interface AProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
}

interface ThemeProps {
  theme?: Theme;
}

const AStyled = styled.a<Partial<ThemeProps>>`
  ${({ theme }) => theme&&theme.generateCSS(Components.A)}
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
