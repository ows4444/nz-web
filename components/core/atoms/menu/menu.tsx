'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface MenuProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const MenuStyled = styled.menu<MenuProps>``;

const Menu: FC<MenuProps> = ({ children, ...rest }) => <MenuStyled {...rest}>{children}</MenuStyled>;

/**
 * DONE
 */
export default Menu;
