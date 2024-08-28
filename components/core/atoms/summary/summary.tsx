'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { BasicLayout } from '@components/types';

type SummaryProps = BasicLayout<ComponentProps<'summary'>> & {
  content: string;
};

const SummaryStyled = styled.summary<SummaryProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.SUMMARY, props)};
`;

const Summary: FC<SummaryProps> = (props) => <SummaryStyled {...props}>{props.content}</SummaryStyled>;

export default Summary;
