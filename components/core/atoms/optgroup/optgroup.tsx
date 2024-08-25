'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface OptGroupProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const OptGroupStyled = styled.optgroup<OptGroupProps>``;

const OptGroup: FC<OptGroupProps> = ({ children, ...rest }) => <OptGroupStyled {...rest}>{children}</OptGroupStyled>;

/**
 * DONE
 */
export default OptGroup;
