'use client';

import { Theme } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const HeaderStyled = styled.header<HeaderProps>``;

const Header: React.FC<Omit<HeaderProps, '$theme'>> = ({ children, ...rest }) => (
  <HeaderStyled {...rest}>{children}</HeaderStyled>
);

export default Header;
