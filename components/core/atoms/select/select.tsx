'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface SelectProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const SelectStyled = styled.select<SelectProps>``;

const Select: FC<SelectProps> = ({ children, ...rest }) => <SelectStyled {...rest}>{children}</SelectStyled>;

/**
 * DONE
 */
export default Select;
