'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, HTMLAttributes } from 'react';
import { Theme, Variants } from '@styles/theme';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
}

interface ThemeProps {
  theme?: Theme;
  variant?: Variants;
}

const ButtonStyled = styled.button<Partial<ThemeProps>>`
  color: ${({ theme, variant = Variants.Primary }) => theme.palette[variant]};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Button: FC<ButtonProps & Omit<Partial<ThemeProps>, 'theme'>> = ({ title, variant, children, ...rest }) => (
  <ButtonStyled variant={variant} {...rest}>
    {title}
    {children}
  </ButtonStyled>
);

/**
 * DONE
 */
export default Button;
