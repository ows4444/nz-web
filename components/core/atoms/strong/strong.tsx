'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { BasicLayout } from '@components/types';

type StrongProps = BasicLayout<ComponentProps<'strong'>> & {
  content: string;
};

const StrongStyled = styled.strong<StrongProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.STRONG, props)};
`;

const Strong: FC<StrongProps> = (props) => <StrongStyled {...props}>{props.content}</StrongStyled>;

export default Strong;
