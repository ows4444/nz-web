'use client';

import React from 'react';
import styled from 'styled-components';
import type { ComponentProps, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';

type CanvasProps = Layout<ComponentProps<'canvas'>>;

const CanvasStyled = styled.canvas<CanvasProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.CANVAS, props)};
`;

const Canvas: FC<CanvasProps> = (props) => <CanvasStyled {...props} />;

export default Canvas;
