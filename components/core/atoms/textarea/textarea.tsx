'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface TextareaProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const TextareaStyled = styled.textarea<Partial<TextareaProps>>`
  ${({ theme }) => theme&&theme.generateCSS(Components.TEXTAREA)};
`;

/**
 * DONE
 */
const Textarea: FC<TextareaProps> = ({ content, ...rest }: TextareaProps) => (
  <TextareaStyled value={content} {...rest} />
);

export default Textarea;
