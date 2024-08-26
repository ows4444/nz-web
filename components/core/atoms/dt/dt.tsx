'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DTProps extends ComponentProps<'dt'> {
  children?: ReactNode;
}

const DTStyled = styled.col<DTProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.DT)};
`;

const DT: FC<DTProps> = ({ children, ...rest }) => <DTStyled {...rest}>{children}</DTStyled>;

/**
 * DONE
 */
export default DT;
