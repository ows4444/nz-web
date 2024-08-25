'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface NavProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const NavStyled = styled.nav<NavProps>``;

const Nav: FC<NavProps> = ({ children, ...rest }) => <NavStyled {...rest}>{children}</NavStyled>;

/**
 * DONE
 */
export default Nav;
