'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface MainProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const MainStyled = styled.main<MainProps>``;

const Main: FC<MainProps> = ({ children, ...rest }) => <MainStyled {...rest}>{children}</MainStyled>;

/**
 * DONE
 */
export default Main;
