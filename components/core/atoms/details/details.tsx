'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DetailsProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const DetailsStyled = styled.details<DetailsProps>`${({ theme }) => theme&&theme.generateCSS(Components.DETAILS)};`;

const DETAILS: FC<DetailsProps> = ({ children, ...rest }) => <DetailsStyled {...rest}>{children}</DetailsStyled>;

/**
 * DONE
 */
export default DETAILS;
