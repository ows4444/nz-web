'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type MenuProps = Layout<ComponentProps<'menu'>>;

const MenuStyled = styled.menu<MenuProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.MENU, props)}
`;

const Menu: FC<MenuProps> = ({ innerRef, ...props }) => <MenuStyled ref={innerRef} {...props} />;

export default Menu;
