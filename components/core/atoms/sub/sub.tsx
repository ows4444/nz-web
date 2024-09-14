'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type SubProps = Layout<ComponentProps<'sub'>> & {
  content: string;
};

const SubStyled = styled.sub<SubProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.SUB, props)};
`;

const Sub: FC<SubProps> = (props) => <SubStyled {...props}>{props.content}</SubStyled>;

export default Sub;
