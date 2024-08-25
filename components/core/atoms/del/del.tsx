'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface DelProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const DelStyled = styled.del<DelProps>``;

const DEL: FC<DelProps> = ({ children, ...rest }) => <DelStyled {...rest}>{children}</DelStyled>;

/**
 * DONE
 */
export default DEL;
