'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC, ReactNode } from 'react';
import { Theme } from '@styles/theme';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const HeaderStyled = styled.header<Partial<HeaderProps>>``;

const Header: FC<HeaderProps> = ({ children, ...rest }: HeaderProps) => (
  <HeaderStyled {...rest}>{children}</HeaderStyled>
);

export default Header;
