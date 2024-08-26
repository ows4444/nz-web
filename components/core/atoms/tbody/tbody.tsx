'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface TBodyProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const TBodyStyled = styled.tbody<TBodyProps>`${({ theme }) => theme&&theme.generateCSS(Components.TBODY)};`;

const TBody: FC<TBodyProps> = ({ children, ...rest }) => <TBodyStyled {...rest}>{children}</TBodyStyled>;

/**
 * DONE
 */
export default TBody;
