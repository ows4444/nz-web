'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { BasicLayout } from '@components/types';

type PreProps = BasicLayout<ComponentProps<'pre'>> & {
  content: string;
};

const PreStyled = styled.pre<PreProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.PRE, props)};
`;

const Pre: FC<PreProps> = (props) => <PreStyled {...props}>{props.content}</PreStyled>;

export default Pre;
