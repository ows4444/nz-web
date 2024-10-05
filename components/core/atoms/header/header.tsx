'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type HeaderProps = Layout<ComponentProps<'header'>>;

const HeaderStyled = styled.header<HeaderProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.HEADER, props)};
`;

const Header: FC<HeaderProps> = ({ innerRef, ...props }) => <HeaderStyled ref={innerRef} {...props} />;

export default Header;
