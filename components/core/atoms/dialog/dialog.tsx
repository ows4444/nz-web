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
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.DIALOG, props)};
`;

const Dialog: FC<DialogProps> = (props) => <DialogStyled {...props} />;

/**
 * DONE
 */
export default Dialog;
