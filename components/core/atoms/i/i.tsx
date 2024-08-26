'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface IProps extends ComponentProps<'i'> {
  content: string;
}

const IStyled = styled.i<Omit<IProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.I)};
`;

/**
 * DONE
 */
const I: FC<IProps> = ({ content, ...rest }: IProps) => <IStyled {...rest}>{content}</IStyled>;

export default I;
