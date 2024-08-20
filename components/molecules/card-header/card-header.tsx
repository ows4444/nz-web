'use client';
import type React from 'next';
import styled from 'styled-components';
import Header from '@components/atoms/header/header';
import { Size, Sizes, Theme, Variant, Variants } from '@styles/theme';

export interface CardHeaderProps extends React.ComponentProps<'header'> {
  $variant?: Variant;
  $size?: Size;
  theme?: Theme;
}

const CardHeaderStyled = styled(Header)<Omit<CardHeaderProps, '$title'>>`
 
`;

const CardHeader: React.FC<CardHeaderProps> = ({
  $size = Sizes.MD,
  $variant = Variants.Primary,
  children,
  ...rest
}: CardHeaderProps) => (
  <CardHeaderStyled $size={$size} $variant={$variant} {...rest}>
    {children}
  </CardHeaderStyled>
);

export default CardHeader;
