'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type FigureProps = Layout<ComponentProps<'figure'>>;

const FigureStyled = styled.figure<FigureProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.FIGURE, props)};
`;

const Figure: FC<FigureProps> = (props) => <FigureStyled {...props} />;

export default Figure;
