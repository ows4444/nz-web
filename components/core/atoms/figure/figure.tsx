'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface FigureProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const FigureStyled = styled.figure<FigureProps>``;

const Figure: FC<FigureProps> = ({ children, ...rest }) => <FigureStyled {...rest}>{children}</FigureStyled>;

/**
 * DONE
 */
export default Figure;
