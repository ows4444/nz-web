'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';
type DetailsProps = Layout<ComponentProps<'details'>>;

const DetailsStyled = styled.details<DetailsProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.DETAILS, props)};
`;

const DETAILS: FC<DetailsProps> = (props) => <DetailsStyled {...props} />;

export default DETAILS;
