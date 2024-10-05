'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type DTProps = Layout<ComponentProps<'dt'>>;

const DTStyled = styled.col<DTProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.DT, props)};
`;

const DT: FC<DTProps> = ({ innerRef, ...props }) => <DTStyled ref={innerRef} {...props} />;

export default DT;
