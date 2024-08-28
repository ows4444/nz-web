'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface TRProps extends ComponentProps<'tr'> {
  children?: ReactNode;
}

const TRStyled = styled.tr<TRProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.TR, props)};
`;

const TR: FC<TRProps> = (props) => <TRStyled {...props} />;

/**
 * DONE
 */
export default TR;
