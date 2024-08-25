'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface EMProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const EMStyled = styled.em<EMProps>``;

const EM: FC<EMProps> = ({ children, ...rest }) => <EMStyled {...rest}>{children}</EMStyled>;

/**
 * DONE
 */
export default EM;
