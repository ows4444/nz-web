'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface TextareaProps extends ComponentProps<'textarea'> {
  content: string;
}

const TextareaStyled = styled.textarea<Omit<TextareaProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.TEXTAREA)};
`;

/**
 * DONE
 */
const Textarea: FC<TextareaProps> = ({ content, ...rest }: TextareaProps) => (
  <TextareaStyled value={content} {...rest} />
);

export default Textarea;
