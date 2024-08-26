'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface MenuProps extends ComponentProps<'menu'> {
  children?: ReactNode;
}

const MenuStyled = styled.menu<MenuProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.MENU)}
`;

const Menu: FC<MenuProps> = ({ children, ...rest }) => <MenuStyled {...rest}>{children}</MenuStyled>;

/**
 * DONE
 */
export default Menu;
