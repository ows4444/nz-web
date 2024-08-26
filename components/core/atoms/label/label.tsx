'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  theme?: Theme;
  htmlFor: string;
  content: string;
}

const LabelStyled = styled.label<Partial<LabelProps>>`${({ theme }) => theme&&theme.generateCSS(Components.LABEL)};`;

/**
 * DONE
 */
const Label: FC<LabelProps> = ({ content, htmlFor, ...rest }: LabelProps) => (
  <LabelStyled htmlFor={htmlFor} {...rest}>
    {content}
  </LabelStyled>
);

export default Label;
