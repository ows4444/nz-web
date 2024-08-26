'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface TFootProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const TFootStyled = styled.tfoot<TFootProps>`${({ theme }) => theme&&theme.generateCSS(Components.TFOOT)};`;

const TFoot: FC<TFootProps> = ({ children, ...rest }) => <TFootStyled {...rest}>{children}</TFootStyled>;

/**
 * DONE
 */
export default TFoot;
