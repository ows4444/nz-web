'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';
type DivProps = Layout<ComponentProps<'div'>>;

const DivStyled = styled.div<DivProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.DIV, props)};
`;

const Div: FC<DivProps> = (props) => <DivStyled {...props} />;

export default Div;
