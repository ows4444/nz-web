'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@styles/theme/types';
type OptGroupProps = Layout<ComponentProps<'optgroup'>>;

const OptGroupStyled = styled.optgroup<OptGroupProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.OPTGROUP, props)};
`;

const OptGroup: FC<OptGroupProps> = (props) => <OptGroupStyled {...props} />;

export default OptGroup;
