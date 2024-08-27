'use client';
import React, { ComponentProps, FC } from 'react';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import Header from '@components/core/atoms/header/header';
import { Components } from '@styles/theme/components';
import { FlexBox, FlexBoxProps } from '@components/atoms/flex-box/flex-box';
import { GridBox, GridBoxProps } from '@components/atoms/grid-box/grid-box';

// Define discriminated union for LayoutProps
type CardHeaderProps =
  | (FlexBoxProps & { $layout: 'flex' } & Partial<Record<keyof GridBox, never>>)
  | (GridBoxProps & { $layout: 'grid' } & Partial<Record<keyof FlexBox, never>>)
  | ({ $layout?: undefined } & Partial<Record<keyof FlexBox, never>> &
      Partial<Record<keyof GridBox, never>> &
      ComponentProps<'header'>);

// Styled component for CardHeader using styled-components
const CardHeaderStyled = styled(Header)<CardHeaderProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.CARD_HEADER, props)};
`;

const CardHeader: FC<CardHeaderProps> = (props) => <CardHeaderStyled {...props} />;

export default CardHeader;
