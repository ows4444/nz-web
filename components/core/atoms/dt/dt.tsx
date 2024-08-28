'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type DTProps = Layout<ComponentProps<'dt'>>;

const DTStyled = styled.col<DTProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.DT, props)};
`;

const DT: FC<DTProps> = (props) => <DTStyled {...props} />;

export default DT;
