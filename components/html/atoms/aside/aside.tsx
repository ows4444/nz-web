'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
export interface AsideProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}
const AsideStyled = styled.aside<AsideProps>``;
const Aside: FC<AsideProps> = ({ children, ...rest }) => <AsideStyled {...rest}>{children}</AsideStyled>;

/**
 * @name Aside
 * @description Aside
 * @param {AsideProps} props
 * @returns {React.ReactElement}
 * @example <Aside> </Aside>
 * DONE 
 */
export default Aside;
