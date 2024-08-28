'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { BasicLayout } from '@components/types';

type SmallProps = BasicLayout<ComponentProps<'small'>> & {
  content: string;
};

const SmallStyled = styled.small<SmallProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.SMALL, props)};
`;

const Small: FC<SmallProps> = (props) => <SmallStyled {...props}>{props.content}</SmallStyled>;

export default Small;
