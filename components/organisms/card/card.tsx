'use client';

import React, { ComponentProps } from 'react';
import { LayoutProps } from '@components/types';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import styled from 'styled-components';

type CardProps = LayoutProps<ComponentProps<'div'>> & {};

const CardStyled = styled.div<CardProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.CARD, props)};
`;

const Card: React.FC<CardProps> = (props) => <CardStyled {...props} />;

export default Card;
