'use client';

import React, { ComponentProps } from 'react';
import { Layout } from '@components/types';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import styled from 'styled-components';

type CardProps = Layout<ComponentProps<'div'>>;

const CardStyled = styled.div<CardProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.CARD, props)};
`;

const Card: React.FC<CardProps> = (props) => <CardStyled {...props} />;

export default Card;
