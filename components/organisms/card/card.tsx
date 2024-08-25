'use client';

import FlexBox, { FlexBoxProps } from '@components/atoms/flex-box/flex-box';
import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface CardProps extends FlexBoxProps {
  theme?: Theme;
}

const CardStyled = styled.div<CardProps>``;

const Card: React.FC<CardProps> = ({ children, ...rest }: CardProps & FlexBoxProps) => (
  <FlexBox>
    <CardStyled {...rest}>{children}</CardStyled>
  </FlexBox>
);

export default Card;
