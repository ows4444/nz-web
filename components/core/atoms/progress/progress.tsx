'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type ProgressProps = Layout<ComponentProps<'progress'>> & {
  content: string;
};

const ProgressStyled = styled.progress<ProgressProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.PROGRESS, props)};
`;

const Progress: FC<ProgressProps> = (props) => <ProgressStyled {...props}>{props.content}</ProgressStyled>;

export default Progress;
