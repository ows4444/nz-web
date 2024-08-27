'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface FigureProps extends ComponentProps<'figure'> {
  children?: ReactNode;
}

const FigureStyled = styled.figure<FigureProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.FIGURE)};
`;

const Figure: FC<FigureProps> = (props) => <FigureStyled {...props} />;

/**
 * DONE
 */
export default Figure;
