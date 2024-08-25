'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  title: string;
}

const ButtonStyled = styled.button<Partial<ButtonProps>>``;

/**
 * DONE
 */
const Button: FC<ButtonProps> = ({ title, ...rest }: ButtonProps) => <ButtonStyled {...rest}>{title}</ButtonStyled>;

export default Button;
