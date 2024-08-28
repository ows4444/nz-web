'use client';

import React, { ComponentProps } from 'react';
import { LayoutProps } from '@components/types';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import styled from 'styled-components';

type CardFooterProps = LayoutProps<ComponentProps<'footer'>> & {};

const CardFooterStyled = styled.div<CardFooterProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.CARD_FOOTER, props)};
`;

const CardFooter: React.FC<CardFooterProps> = (props) => <CardFooterStyled {...props} />;

export default CardFooter;
