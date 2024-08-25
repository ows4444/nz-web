'use client';
import type React from 'next';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import Header from '@components/core/atoms/header/header';

export interface CardHeaderProps extends React.ComponentProps<'header'> {
  theme?: Theme;
}

const CardHeaderStyled = styled(Header)<Omit<CardHeaderProps, '$title'>>``;

const CardHeader: React.FC<CardHeaderProps> = ({ children, ...rest }: CardHeaderProps) => (
  <CardHeaderStyled {...rest}>{children}</CardHeaderStyled>
);

export default CardHeader;
