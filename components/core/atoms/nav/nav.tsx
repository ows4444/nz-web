'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface NavProps extends ComponentProps<'nav'> {
  children?: ReactNode;
}

const NavStyled = styled.nav<NavProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.NAV, props)}
`;

const Nav: FC<NavProps> = (props) => <NavStyled {...props} />;

/**
 * DONE
 */
export default Nav;
