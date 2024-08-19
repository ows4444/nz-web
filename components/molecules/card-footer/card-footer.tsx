'use client';
import type React from 'next';
import styled from 'styled-components';
import Footer from '@components/atoms/footer/footer';
import { Size, Sizes, Theme, Variant, Variants } from '@styles/theme';

export interface CardFooterProps extends React.ComponentProps<'footer'> {
  $variant?: Variant;
  $size?: Size;
  theme?: Theme;
}

const CardFooterStyled = styled(Footer)<CardFooterProps>`
 
`;

const CardFooter: React.FC<CardFooterProps> = ({
  $size = Sizes.Default,
  $variant = Variants.Primary,
  children,

  ...rest
}: CardFooterProps) => (
  <CardFooterStyled $size={$size} $variant={$variant} {...rest}>
    {children}
  </CardFooterStyled>
);

export default CardFooter;
