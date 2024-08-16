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
  padding: 16px 16px;
  font-size: 16px;
  border: 1px solid ${({ theme, $variant = Variants.Default }) => theme.palette[$variant].BorderColor};
  border-radius: 4px;
  outline: none;
  background-color: ${({ theme, $variant = Variants.Default }) => theme.palette[$variant].BackgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: ${({ $size }) => ($size === Sizes.Default ? '100px' : $size === Sizes.Medium ? '200px' : '300px')};
  }
`;

const CardHeadStyled = styled.header<Omit<CardProps, 'title'>>``;

const CardBodyStyled = styled.div<Omit<CardProps, 'title'>>``;

const CardFootStyled = styled.footer<Omit<CardProps, 'title'>>``;

const Card: React.FC<Omit<CardProps, '$variant' | '$size'> & { $variant: Variant; $size: Size }> = ({
  title,
  $size = Sizes.Default,
  $variant = Variants.Default,
  children,
}: Omit<CardProps, '$variant' | '$size'> & { $variant: Variant; $size: Size }) => (
  <CardStyled $size={$size} $variant={$variant}>
    <CardHeadStyled $size={$size} $variant={$variant}>
      {title}
    </CardHeadStyled>
    <CardBodyStyled $size={$size} $variant={$variant}>
      {children}
    </CardBodyStyled>
    <CardFootStyled $size={$size} $variant={$variant}></CardFootStyled>
  </CardStyled>
);

export default Card;
