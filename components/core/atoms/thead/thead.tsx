'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface THeadProps extends ComponentProps<'thead'> {
  children?: ReactNode;
}

const THeadStyled = styled.thead<THeadProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.THEAD)};
`;

const THead: FC<THeadProps> = (props) => <THeadStyled {...props} />;

/**
 * DONE
 */
export default THead;
