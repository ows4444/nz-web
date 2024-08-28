'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';

type DDProps = Layout<ComponentProps<'dd'>>;

const DDStyled = styled.dd<DDProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.DD, props)};
`;

const DD: FC<DDProps> = (props) => <DDStyled {...props} />;

export default DD;
