'use client';

import FlexBox from '@components/atoms/flex-box/flex-box';
import { Size, Sizes, Theme, Variant, Variants } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface CardProps extends React.ComponentProps<'div'> {
  $variant?: Variant;
  $size?: Size;
  title: string;
  theme?: Theme;
}

const CardStyled = styled.section<Omit<CardProps, 'title'>>`
  padding: 4px 16px;
  font-size: 16px;
  border: 1px solid ${({ theme, $variant = Variants.Default }) => theme.palette[$variant].BorderColor};
  border-radius: 4px;
  outline: none;
  background-color: ${({ theme, $variant = Variants.Default }) => theme.palette[$variant].BackgroundColor};
`;

const CardHeadStyled = styled.header<Omit<CardProps, 'title'>>`
  padding: 8px 8px;
  align-items: center;
`;

const CardBodyStyled = styled.div<Omit<CardProps, 'title'>>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, $variant = Variants.Default }) => theme.palette[$variant].BackgroundColor};
`;

const CardFootStyled = styled.footer<Omit<CardProps, 'title'>>`
  padding: 8px 8px;
`;

const Card: React.FC<Omit<CardProps, '$variant' | '$size'> & { $variant: Variant; $size: Size }> = ({
  title,
  $size = Sizes.Default,
  $variant = Variants.Default,
  children,
}: Omit<CardProps, '$variant' | '$size'> & { $variant: Variant; $size: Size }) => (
  <FlexBox $alignItems="center" $justifyContent="center">
    <CardStyled $size={$size} $variant={$variant}>
      <CardHeadStyled $size={$size} $variant={$variant}>
        <FlexBox $alignItems="center" $justifyContent="center">
          <h1>{title}</h1>
        </FlexBox>
      </CardHeadStyled>
      <CardBodyStyled $size={$size} $variant={$variant}>
        {children}
      </CardBodyStyled>
      <CardFootStyled $size={$size} $variant={$variant}></CardFootStyled>
    </CardStyled>
  </FlexBox>
);

export default Card;
