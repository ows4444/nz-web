'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SummaryProps extends ComponentProps<'summary'> {
  content: string;
}

const SummaryStyled = styled.summary<Omit<SummaryProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.SUMMARY)};
`;

/**
 * DONE
 */
const Summary: FC<SummaryProps> = ({ content, ...rest }: SummaryProps) => (
  <SummaryStyled {...rest}>{content}</SummaryStyled>
);

export default Summary;
