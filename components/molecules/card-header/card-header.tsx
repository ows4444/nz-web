'use client';
import React, { ComponentProps, FC } from 'react';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import Header from '@components/core/atoms/header/header';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';
type CardHeaderProps = Layout<ComponentProps<'header'>>;

// Styled component for CardHeader using styled-components
const CardHeaderStyled = styled(Header)<CardHeaderProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.CARD_HEADER, props)};
`;

const CardHeader: FC<CardHeaderProps> = (props) => <CardHeaderStyled {...props} />;

export default CardHeader;
