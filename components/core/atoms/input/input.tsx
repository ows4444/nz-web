'use client';

import { Components, ElementCss, ElementsCss, MediaSizes, Size, Sizes, Theme, Variant, Variants } from '@styles/theme';
import { TransformName } from '@styles/theme/styles';
import React from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: Theme;
  $variant: Variant;
  $gridArea?: string;
  $size?: Size;
}

const InputStyled = styled.input<InputProps>`
  ${({ $size = Sizes.MAX, theme }) =>
    Object.entries(MediaSizes)
      .filter(
        ([_, MediaKey]) =>
          theme.elements && theme.elements[Components.INPUT] && theme.mediaSizes && theme.mediaSizes[MediaKey],
      )
      .map(
        ([_value, MediaKey]) =>
          `
          @media only screen and (min-width: ${theme.mediaSizes[MediaKey]}) {
          ${Object.keys(theme.elements[Components.INPUT][$size]?.[MediaKey]!)
            .map(
              (value) =>
                `${TransformName(ElementsCss[value as ElementCss])}:${theme.elements[Components.INPUT][$size]?.[MediaKey]![value as ElementCss]};`,
            )
            .join('')}
            
          }`,
      )
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
