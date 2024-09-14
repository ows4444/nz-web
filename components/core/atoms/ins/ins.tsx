'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type InsProps = Layout<ComponentProps<'ins'>> & {
  content: string;
};

const InsStyled = styled.ins<InsProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.INS, props)};
`;

const Ins: FC<InsProps> = (props) => <InsStyled {...props}>{props.content}</InsStyled>;

export default Ins;
