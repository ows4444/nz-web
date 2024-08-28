'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { BasicLayout } from '@components/types';

type IProps = BasicLayout<ComponentProps<'i'>> & {
  content: string;
};

const IStyled = styled.i<IProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.I, props)};
`;

const I: FC<IProps> = (props) => <IStyled {...props}>{props.content}</IStyled>;

export default I;
