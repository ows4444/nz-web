'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { BasicLayout } from '@components/types';

type LiProps = BasicLayout<ComponentProps<'li'>> & {
  content: string;
};

const LiStyled = styled.li<LiProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.LI, props)};
`;

const Li: FC<LiProps> = (props) => <LiStyled {...props}>{props.content}</LiStyled>;

export default Li;
