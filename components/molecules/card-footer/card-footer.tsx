'use client';
import type React from 'next';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import Footer from '@components/core/atoms/footer/footer';

export interface CardFooterProps extends React.ComponentProps<'footer'> {
  theme?: Theme;
}

const CardFooterStyled = styled(Footer)<CardFooterProps>``;

const CardFooter: React.FC<CardFooterProps> = ({ children, ...rest }: CardFooterProps) => (
  <CardFooterStyled {...rest}>{children}</CardFooterStyled>
);

export default CardFooter;
