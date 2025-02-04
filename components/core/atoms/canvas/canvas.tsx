'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type CanvasProps = Layout<ComponentProps<'canvas'>>;

const CanvasStyled = styled.canvas<CanvasProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.CANVAS, props)};
`;

const Canvas: FC<CanvasProps> = ({ innerRef, ...props }) => <CanvasStyled ref={innerRef} {...props} />;

export default Canvas;
