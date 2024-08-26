'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface QProps extends ComponentProps<'q'> {
  content: string;
}

const QStyled = styled.p<Omit<QProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.Q)};
`;

/**
 * DONE
 */
const Q: FC<QProps> = ({ content, ...rest }: QProps) => <QStyled {...rest}>{content}</QStyled>;

export default Q;
