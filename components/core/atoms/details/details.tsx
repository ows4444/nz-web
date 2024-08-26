'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DetailsProps extends ComponentProps<'details'> {
  children?: ReactNode;
}

const DetailsStyled = styled.details<DetailsProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.DETAILS)};
`;

const DETAILS: FC<DetailsProps> = ({ children, ...rest }) => <DetailsStyled {...rest}>{children}</DetailsStyled>;

/**
 * DONE
 */
export default DETAILS;
