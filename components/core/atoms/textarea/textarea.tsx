'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface TextareaProps extends ComponentProps<'textarea'> {
  content: string;
}

const TextareaStyled = styled.textarea<TextareaProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.TEXTAREA)};
`;

/**
 * DONE
 */
const Textarea: FC<TextareaProps> = (props) => <TextareaStyled value={props.content} {...props} />;

export default Textarea;
