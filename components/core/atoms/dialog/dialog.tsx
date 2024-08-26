'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DialogProps extends ComponentProps<'dialog'> {
  children?: ReactNode;
}

const DialogStyled = styled.dialog<DialogProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.DIALOG)};
`;

const Dialog: FC<DialogProps> = ({ children, ...rest }) => <DialogStyled {...rest}>{children}</DialogStyled>;

/**
 * DONE
 */
export default Dialog;
