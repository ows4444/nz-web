'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Components } from '@styles/theme/components';
import { Theme } from '@styles/theme';
import { Layout } from '@styles/theme/types';

type BRProps = Layout<ComponentProps<'br'>>;

const BRStyled = styled.br<BRProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.BR, props)};
`;

const BR: FC<BRProps> = (props) => <BRStyled {...props} />;

export default BR;
