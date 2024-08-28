'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type HGroupProps = Layout<ComponentProps<'hgroup'>>;

const HGroupStyled = styled.hgroup<HGroupProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.HGROUP, props)};
`;

const HGroup: FC<HGroupProps> = (props) => <HGroupStyled {...props} />;

export default HGroup;
