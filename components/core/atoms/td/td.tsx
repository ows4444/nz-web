'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface TDProps extends ComponentProps<'td'> {
  children?: ReactNode;
}

const TDStyled = styled.td<TDProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.TD, props)};
`;

const TD: FC<TDProps> = (props) => <TDStyled {...props} />;

/**
 * DONE
 */
export default TD;
