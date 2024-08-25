'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, HTMLAttributes } from 'react';
import { Theme } from '@styles/theme';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
}

interface ThemeProps {
  theme?: Theme;
}

const ButtonStyled = styled.button<Partial<ThemeProps>>`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Button: FC<ButtonProps & Omit<Partial<ThemeProps>, 'theme'>> = ({ title, children, ...rest }) => (
  <ButtonStyled {...rest}>
    {title}
    {children}
  </ButtonStyled>
);

/**
 * DONE
 */
export default Button;
