'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface ColgroupProps extends ComponentProps<'colgroup'> {
  children?: ReactNode;
}

const ColgroupStyled = styled.colgroup<ColgroupProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.COLGROUP)};
`;

const Colgroup: FC<ColgroupProps> = ({ children, ...rest }) => <ColgroupStyled {...rest}>{children}</ColgroupStyled>;

/**
 * DONE
 */
export default Colgroup;
