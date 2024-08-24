'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
export interface AreaProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}
const AreaStyled = styled.area<AreaProps>``;
const Area: FC<AreaProps> = ({ children, ...rest }) => <AreaStyled {...rest}>{children}</AreaStyled>;

/**
 * @name Area
 * @description Area
 * @param {AreaProps} props
 * @returns {React.ReactElement}
 * @example <Area> </Area>
 * DONE 
 */
export default Area;
