'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
export interface AreaProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}
const AreaStyled = styled.area<AreaProps>`  ${({ theme }) => theme&&theme.generateCSS(Components.AREA)};`;
const Area: FC<AreaProps> = ({ children, ...rest }) => <AreaStyled {...rest}>{children}</AreaStyled>;

/**
 * DONE
 */
export default Area;
