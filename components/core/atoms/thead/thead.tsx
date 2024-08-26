'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface THeadProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const THeadStyled = styled.thead<THeadProps>`${({ theme }) => theme&&theme.generateCSS(Components.THEAD)};`;

const THead: FC<THeadProps> = ({ children, ...rest }) => <THeadStyled {...rest}>{children}</THeadStyled>;

/**
 * DONE
 */
export default THead;
