'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type MarkProps = Layout<ComponentProps<'mark'>>;

const MarkStyled = styled.mark<MarkProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.MARK, props)};
`;

const Mark: FC<MarkProps> = (props) => <MarkStyled {...props} />;

export default Mark;
