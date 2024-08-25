'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface DivProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const DivStyled = styled.div<DivProps>``;

const Div: FC<DivProps> = ({ children, ...rest }) => <DivStyled {...rest}>{children}</DivStyled>;

/**
 * DONE
 */
export default Div;
