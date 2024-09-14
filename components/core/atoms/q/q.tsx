'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type QProps = Layout<ComponentProps<'q'>> & {
  content: string;
};

const QStyled = styled.p<QProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.Q, props)};
`;

const Q: FC<QProps> = (props) => <QStyled {...props}>{props.content}</QStyled>;

export default Q;
