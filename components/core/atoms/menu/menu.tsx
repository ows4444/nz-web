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
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.MENU, props)}
`;

const Menu: FC<MenuProps> = (props) => <MenuStyled {...props} />;

/**
 * DONE
 */
export default Menu;
