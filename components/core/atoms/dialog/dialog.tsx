'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface DialogProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const DialogStyled = styled.dialog<DialogProps>``;

const Dialog: FC<DialogProps> = ({ children, ...rest }) => <DialogStyled {...rest}>{children}</DialogStyled>;

/**
 * DONE
 */
export default Dialog;
