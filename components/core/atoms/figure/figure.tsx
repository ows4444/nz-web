'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type FigureProps = Layout<ComponentProps<'figure'>>;

const FigureStyled = styled.figure<FigureProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.FIGURE, props)};
`;

const Figure: FC<FigureProps> = (props) => <FigureStyled {...props} />;

export default Figure;
