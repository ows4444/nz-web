'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type DialogProps = Layout<ComponentProps<'dialog'>>;

const DialogStyled = styled.dialog<DialogProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.DIALOG, props)};
`;

const Dialog: FC<DialogProps> = ({ innerRef, ...props }) => <DialogStyled ref={innerRef} {...props} />;

export default Dialog;
