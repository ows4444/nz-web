'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface PreProps extends ComponentProps<'pre'> {
  content: string;
}

const PreStyled = styled.pre<Omit<PreProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.PRE)};
`;

/**
 * DONE
 */
const Pre: FC<PreProps> = ({ content, ...rest }: PreProps) => <PreStyled {...rest}>{content}</PreStyled>;

export default Pre;
