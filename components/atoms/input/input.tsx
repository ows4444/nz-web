'use client';

import { MediaSizes, Sizes, Theme, Variant, Variants } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: Theme;
  $variant: Variant;
  $gridArea?: string;
  $size?: Sizes;
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
  ${({ $gridArea }) => $gridArea && `grid-area: ${$gridArea};`}

  ${({ $size = Sizes.Default, theme }) =>
    Object.entries(MediaSizes)
      .map(([value, MediaKey]) => {
        const head = `@media only screen and (min-width: ${theme.mediaSizes[MediaKey]}) {`;
        const body = Object.entries(Sizes)
          .map(([size, SizeKey]) => {
            if (size === $size && theme.inputSizes[SizeKey]) {
              return `width: ${theme.inputSizes[SizeKey]};`;
            }
          })
          .join('');
        const tail = `}`;

        return `${head} ${body} ${tail}`;
      })
      .join('')}
`;

const Input: React.FC<Omit<InputProps, '$variant'> & { $variant?: Variant }> = ({
  $variant = Variants.Default,
  children,
  ...rest
}) => (
  <InputStyled $variant={$variant} {...rest}>
    {children}
  </InputStyled>
);

export default Input;
