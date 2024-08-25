'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface BodyProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const BodyStyled = styled.body<BodyProps>``;

const Body: FC<BodyProps> = ({ children, ...rest }) => <BodyStyled {...rest}>{children}</BodyStyled>;

/**
 * DONE
 */
export default Body;
