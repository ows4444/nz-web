'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface TFootProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const TFootStyled = styled.tfoot<TFootProps>``;

const TFoot: FC<TFootProps> = ({ children, ...rest }) => <TFootStyled {...rest}>{children}</TFootStyled>;

/**
 * DONE
 */
export default TFoot;
