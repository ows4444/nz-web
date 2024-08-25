'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface PictureProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const PictureStyled = styled.picture<PictureProps>``;

const Picture: FC<PictureProps> = ({ children, ...rest }) => <PictureStyled {...rest}>{children}</PictureStyled>;

/**
 * DONE
 */
export default Picture;
