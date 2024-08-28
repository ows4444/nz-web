'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Components } from '@styles/theme/components';
import { Theme } from '@styles/theme';
import { Layout } from '@components/types';
type HRProps = Layout<ComponentProps<'hr'>>;

const HRStyled = styled.hr<HRProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.HR, props)};
`;

const HR: FC<HRProps> = () => <HRStyled />;

export default HR;
