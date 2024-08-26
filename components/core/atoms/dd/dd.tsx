'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DDProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const DDStyled = styled.dd<DDProps>`${({ theme }) => theme&&theme.generateCSS(Components.DD)};`;

const DD: FC<DDProps> = ({ children, ...rest }) => <DDStyled {...rest}>{children}</DDStyled>;

/**
 * DONE
 */
export default DD;
