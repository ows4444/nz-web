'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface LabelProps extends ComponentProps<'label'> {
  htmlFor: string;
  content: string;
}

const LabelStyled = styled.label<Omit<LabelProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.LABEL)};
`;

/**
 * DONE
 */
const Label: FC<LabelProps> = ({ content, htmlFor, ...rest }: LabelProps) => (
  <LabelStyled htmlFor={htmlFor} {...rest}>
    {content}
  </LabelStyled>
);

export default Label;
