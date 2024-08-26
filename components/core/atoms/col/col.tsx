'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface ColProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const ColStyled = styled.col<ColProps>`${({ theme }) => theme&&theme.generateCSS(Components.COL)};`;

const Col: FC<ColProps> = ({ children, ...rest }) => <ColStyled {...rest}>{children}</ColStyled>;

/**
 * DONE
 */
export default Col;
