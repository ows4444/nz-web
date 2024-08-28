'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';
type DLProps = Layout<ComponentProps<'dl'>>;

const DLStyled = styled.dl<DLProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.DL, props)};
`;

const DL: FC<DLProps> = (props) => <DLStyled {...props} />;

export default DL;
