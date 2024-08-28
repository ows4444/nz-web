'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type LegendProps = Layout<ComponentProps<'legend'>> & {
  content: string;
};

const LegendStyled = styled.label<LegendProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.LEGEND, props)}
`;

const Legend: FC<LegendProps> = (props) => <LegendStyled {...props}>{props.content}</LegendStyled>;

export default Legend;
