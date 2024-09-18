'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type NavProps = Layout<ComponentProps<'nav'>>;

const NavStyled = styled.nav<NavProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.NAV, props)}
`;

const Nav: FC<NavProps> = (props) => <NavStyled {...props} />;

export default Nav;
