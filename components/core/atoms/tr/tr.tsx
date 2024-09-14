'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';
type TRProps = Layout<ComponentProps<'tr'>>;

const TRStyled = styled.tr<TRProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.TR, props)};
`;

const TR: FC<TRProps> = (props) => <TRStyled {...props} />;

export default TR;
