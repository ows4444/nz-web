'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DialogProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const DialogStyled = styled.dialog<DialogProps>`${({ theme }) => theme&&theme.generateCSS(Components.DIALOG)};`;

const Dialog: FC<DialogProps> = ({ children, ...rest }) => <DialogStyled {...rest}>{children}</DialogStyled>;

/**
 * DONE
 */
export default Dialog;
