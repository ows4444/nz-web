'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
export interface AProps extends HTMLAttributes<HTMLElement> {
  theme?: any;
  children: ReactNode;
}
const AStyled = styled.a<AProps>``;
const A: FC<AProps> = ({ children, ...rest }) => <AStyled {...rest}>{children}</AStyled>;

/**
 * DONE 
 */
export default A;
