'use client';

import FlexBox, { FlexBoxProps } from '@components/atoms/flex-box/flex-box';
import { DivProps } from '@components/core/atoms/div/div';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import type React from 'next';
import styled from 'styled-components';

export interface CardProps extends DivProps {}

const CardStyled = styled.div<CardProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.CARD, props)};
`;

const Card: React.FC<CardProps> = ({ children, ...props }: CardProps & FlexBoxProps) => (
  <FlexBox>
    <CardStyled {...props}>{children}</CardStyled>
  </FlexBox>
);

export default Card;
