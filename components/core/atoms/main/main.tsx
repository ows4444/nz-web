'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface MainProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const MainStyled = styled.main<MainProps>`${({ theme }) => theme&&theme.generateCSS(Components.MAIN)};`;

const Main: FC<MainProps> = ({ children, ...rest }) => <MainStyled {...rest}>{children}</MainStyled>;

/**
 * DONE
 */
export default Main;
