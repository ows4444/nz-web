'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type DLProps = Layout<ComponentProps<'dl'>>;

const DLStyled = styled.dl<DLProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.DL, props)};
`;

const DL: FC<DLProps> = ({ innerRef, ...props }) => <DLStyled ref={innerRef} {...props} />;

export default DL;
