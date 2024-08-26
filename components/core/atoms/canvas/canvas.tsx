'use client';

import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface CanvasProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
}
const CanvasStyled = styled.canvas<Partial<CanvasProps>>`${({ theme }) => theme&&theme.generateCSS(Components.CANVAS)};`;
const B: FC<CanvasProps> = ({ ...rest }) => <CanvasStyled {...rest} />;

/**
 * DONE
 */
export default B;
