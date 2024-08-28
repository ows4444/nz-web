'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';
type TextareaProps = Layout<ComponentProps<'textarea'>> & {
  content: string;
};

const TextareaStyled = styled.textarea<TextareaProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.TEXTAREA, props)};
`;

const Textarea: FC<TextareaProps> = (props) => <TextareaStyled value={props.content} {...props} />;

export default Textarea;
