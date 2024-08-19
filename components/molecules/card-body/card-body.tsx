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
  padding: 8px;
  border: 1px solid #c0c;
  border-radius: 5px;

  margin: 8px;

  background-color: #09f;
`;

const CardBody: React.FC<CardBodyProps> = ({
  children,
  $size = Sizes.Default,
  $variant = Variants.Primary,
  ...rest
}: CardBodyProps) => (
  <CardBodyStyled $size={$size} $variant={$variant} {...rest}>
    {children}
  </CardBodyStyled>
);

export default CardBody;
