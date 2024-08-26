'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface ProgressProps extends ComponentProps<'progress'> {
  content: string;
}

const ProgressStyled = styled.progress<Omit<ProgressProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.PROGRESS)};
`;

/**
 * DONE
 */
const Progress: FC<ProgressProps> = ({ content, ...rest }: ProgressProps) => (
  <ProgressStyled {...rest}>{content}</ProgressStyled>
);

export default Progress;
