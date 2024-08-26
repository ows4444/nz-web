'use client';
import type React from 'next';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import Header from '@components/core/atoms/header/header';

export interface CardHeaderProps extends React.ComponentProps<'header'> {}

const CardHeaderStyled = styled(Header)<CardHeaderProps & { theme: Theme }>``;

const CardHeader: React.FC<CardHeaderProps> = ({ children, ...props }: CardHeaderProps) => (
  <CardHeaderStyled {...props}>{children}</CardHeaderStyled>
);

export default CardHeader;
