'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
export interface AsideProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}
const AsideStyled = styled.aside<AsideProps>`${({ theme }) => theme&&theme.generateCSS(Components.ASIDE)};`;
const Aside: FC<AsideProps> = ({ children, ...rest }) => <AsideStyled {...rest}>{children}</AsideStyled>;

/**
 * DONE 
 */
export default Aside;
