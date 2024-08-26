'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface LegendProps extends ComponentProps<'legend'> {
  content: string;
}

const LegendStyled = styled.label<Omit<LegendProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.LEGEND)}
`;

/**
 * DONE
 */
const Legend: FC<LegendProps> = ({ content, ...rest }: LegendProps) => <LegendStyled {...rest}>{content}</LegendStyled>;

export default Legend;
