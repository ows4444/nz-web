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
  ${({ theme }) => theme && theme.generateCSS(Components.TD)};
`;

const TD: FC<TDProps> = ({ children, ...rest }) => <TDStyled {...rest}>{children}</TDStyled>;

/**
 * DONE
 */
export default TD;
