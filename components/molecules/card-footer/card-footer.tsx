'use client';
import type React from 'next';
import styled from 'styled-components'; 
import { Size, Sizes, Theme, Variant, Variants } from '@styles/theme';
import Footer from '@components/core/atoms/footer/footer';

export interface CardFooterProps extends React.ComponentProps<'footer'> {
  $variant?: Variant;
  $size?: Size;
  theme?: Theme;
}

const CardFooterStyled = styled(Footer)<CardFooterProps>`
 
`;

const CardFooter: React.FC<CardFooterProps> = ({
  $size = Sizes.MD,
  $variant = Variants.Primary,
  children,

  ...rest
}: CardFooterProps) => (
  <CardFooterStyled $size={$size} $variant={$variant} {...rest}>
    {children}
  </CardFooterStyled>
);

export default CardFooter;
