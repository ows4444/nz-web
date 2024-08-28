'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';
type DialogProps = Layout<ComponentProps<'dialog'>>;

const DialogStyled = styled.dialog<DialogProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.DIALOG, props)};
`;

const Dialog: FC<DialogProps> = (props) => <DialogStyled {...props} />;

export default Dialog;
