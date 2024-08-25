'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface TDProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const TDStyled = styled.td<TDProps>``;

const TD: FC<TDProps> = ({ children, ...rest }) => <TDStyled {...rest}>{children}</TDStyled>;

/**
 * DONE
 */
export default TD;
