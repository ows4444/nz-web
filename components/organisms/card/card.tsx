'use client';

import FlexBox, { FlexBoxProps } from '@components/atoms/flex-box/flex-box';
import { Size, Sizes, Theme, Variant, Variants } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';
import { ReactElement } from 'react';
import { CardHeaderProps } from '@components/molecules/card-header/card-header';
import { CardBodyProps } from '@components/molecules/card-body/card-body';
import { CardFooterProps } from '@components/molecules/card-footer/card-footer';

export interface CardProps extends FlexBoxProps {
  $variant?: Variant;
  $size?: Size;
  $header?: ReactElement<CardHeaderProps>;
  $body?: ReactElement<CardBodyProps>;
  $footer?: ReactElement<CardFooterProps>;
  theme?: Theme;
}

const CardStyled = styled.div<CardProps>`
 
 
`;

const Card: React.FC<CardProps> = ({
  $direction = 'column',
  $justifyContent = 'center',
  $alignItems = 'center',
  $size = Sizes.MD,
  $variant = Variants.Primary,

  children,
  ...rest
}: CardProps & FlexBoxProps) => (
  <FlexBox $alignItems={$alignItems} $justifyContent={$justifyContent} $direction={$direction}>
    <CardStyled
      $direction={$direction}
      $alignItems="center"
      $justifyContent="center"
      $size={$size}
      $variant={$variant}
      {...rest}
    >
      {children}
    </CardStyled>
  </FlexBox>
);

export default Card;
