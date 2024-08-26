'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, HTMLAttributes } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
}

interface ThemeProps {
  theme?: Theme;
}

const ButtonStyled = styled.button<Partial<ThemeProps>>`
  ${({ theme }) => theme&&theme.generateCSS(Components.BUTTON)}
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
