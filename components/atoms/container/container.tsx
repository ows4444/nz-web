'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  theme?: any;
  children: ReactNode;
}

const ContainerStyled = styled.section<ContainerProps>``;

const Container: FC<ContainerProps> = ({ children, ...rest }) => (
  <ContainerStyled {...rest}>{children}</ContainerStyled>
);

/**
 * DONE
 */
export default Container;
