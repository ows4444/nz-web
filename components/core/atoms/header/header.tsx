'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ReactNode, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface HeaderProps extends ComponentProps<'header'> {
  children?: ReactNode;
}

const HeaderStyled = styled.header<HeaderProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.HEADER)};
`;

const Header: FC<HeaderProps> = (props) => <HeaderStyled {...props} />;

export default Header;
