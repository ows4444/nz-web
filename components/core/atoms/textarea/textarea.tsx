'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type TextareaProps = Layout<ComponentProps<'textarea'>> & {
	content: string;
};

const TextareaStyled = styled.textarea<TextareaProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.TEXTAREA, props)};
`;

const Textarea: FC<TextareaProps> = ({ innerRef, ...props }) => (
	<TextareaStyled value={props.content} ref={innerRef} {...props} />
);

export default Textarea;
