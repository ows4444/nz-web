'use client';
import type React from 'next';
import styled from 'styled-components';
import Section from '@components/atoms/section/section';
import { Size, Sizes, Theme, Variant, Variants } from '@styles/theme';

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
