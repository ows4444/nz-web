'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode,   FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface NavProps extends ComponentProps<'nav'> {
  children?: ReactNode;
}

const NavStyled = styled.nav<NavProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.NAV)}
`;

const Nav: FC<NavProps> = ({ children, ...rest }) => <NavStyled {...rest}>{children}</NavStyled>;

/**
 * DONE
 */
export default Nav;
