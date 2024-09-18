'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type HRProps = Layout<ComponentProps<'hr'>>;

const HRStyled = styled.hr<HRProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.HR, props)};
`;

const HR: FC<HRProps> = () => <HRStyled />;

export default HR;
