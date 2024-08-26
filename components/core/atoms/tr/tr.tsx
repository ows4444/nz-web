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
  ${({ theme }) => theme && theme.generateCSS(Components.TR)};
`;

const TR: FC<TRProps> = ({ children, ...rest }) => <TRStyled {...rest}>{children}</TRStyled>;

/**
 * DONE
 */
export default TR;
