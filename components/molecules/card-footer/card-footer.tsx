'use client';
import type React from 'next';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import Footer from '@components/core/atoms/footer/footer';
import { Components } from '@styles/theme/components';

export interface CardFooterProps extends React.ComponentProps<'footer'> {}

const CardFooterStyled = styled(Footer)<CardFooterProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.CARD_FOOTER,props)};
`;

const CardFooter: React.FC<CardFooterProps> = ({ children, ...props }: CardFooterProps) => (
  <CardFooterStyled {...props}>{children}</CardFooterStyled>
);

export default CardFooter;
