'use client';
import type React from 'next';
import styled from 'styled-components'; 
import { Size, Sizes, Theme, Variant, Variants } from '@styles/theme';
import Section from '@components/core/atoms/section/section';

export interface CardBodyProps extends React.ComponentProps<'section'> {
  $variant?: Variant;
  $size?: Size;
  theme?: Theme;
}

const CardBodyStyled = styled(Section)<CardBodyProps>`
 
`;

const CardBody: React.FC<CardBodyProps> = ({
  children,
  $size = Sizes.XXL,
  $variant = Variants.Primary,
  ...rest
}: CardBodyProps) => (
  <CardBodyStyled $size={$size} $variant={$variant} {...rest}>
    {children}
  </CardBodyStyled>
);

export default CardBody;
