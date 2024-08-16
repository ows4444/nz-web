"use client"

import { Theme, Variant, Variants } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $variant: Variant;
  theme?: Theme;
}

const InputStyled = styled.input<InputProps>`
  padding: 8px 8px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid ${({ theme, $variant }) => theme.palette[$variant].BorderColor};
  border-radius: 4px;
  outline: none;
  background-color: ${({ theme, $variant }) => theme.palette[$variant].BackgroundColor};
  color: ${({ theme, $variant }) => theme.palette[$variant].FontColor};
  width: 100%;
  &:hover {
    border-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Hover.BorderColor']};
    background-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Hover.BackgroundColor']};
    color: ${({ theme, $variant }) => theme.palette[$variant]?.['Hover.FontColor']};
    opacity: 0.8;
  }
  &:active {
    border-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Active.BorderColor']};
    background-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Active.BackgroundColor']};
    color: ${({ theme, $variant }) => theme.palette[$variant]?.['Active.FontColor']};
    transform: translateY(1px);
  }
  &:disabled {
    border-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Disabled.BorderColor']};
    background-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Disabled.BackgroundColor']};
    color: ${({ theme, $variant }) => theme.palette[$variant]?.['Disabled.FontColor']};
    cursor: not-allowed;
  }
  &:focus {
    border-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Focus.BorderColor']};
    background-color: ${({ theme, $variant }) => theme.palette[$variant]?.['Focus.BackgroundColor']};
    color: ${({ theme, $variant }) => theme.palette[$variant]?.['Focus.FontColor']};
  }
`;

const Button: React.FC<Omit<InputProps, '$variant'> & { $variant?: Variant }> = ({
  $variant = Variants.Default,
  children,
  ...rest
}) => {
  return (
    <InputStyled $variant={$variant} {...rest}>
      {children}
    </InputStyled>
  );
};

export default Button;
