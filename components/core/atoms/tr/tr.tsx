'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface TRProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const TRStyled = styled.tr<TRProps>``;

const TR: FC<TRProps> = ({ children, ...rest }) => <TRStyled {...rest}>{children}</TRStyled>;

/**
 * DONE
 */
export default TR;
