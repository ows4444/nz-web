'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface ProgressProps extends ComponentProps<'progress'> {
  content: string;
}

const ProgressStyled = styled.progress<ProgressProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.PROGRESS,props)};
`;

/**
 * DONE
 */
const Progress: FC<ProgressProps> = (props) => <ProgressStyled {...props}>{props.content}</ProgressStyled>;

export default Progress;
