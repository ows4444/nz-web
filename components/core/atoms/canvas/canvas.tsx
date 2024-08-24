'use client';

import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface CanvasProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
}
const CanvasStyled = styled.canvas<Partial<CanvasProps>>``;
const B: FC<CanvasProps> = ({ ...rest }) => <CanvasStyled {...rest} />;

/**
 * DONE
 */
export default B;
