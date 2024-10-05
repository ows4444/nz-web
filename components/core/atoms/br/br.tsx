'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type BRProps = Layout<ComponentProps<'br'>>;

const BRStyled = styled.br<BRProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.BR, props)};
`;

const BR: FC<BRProps> = ({ innerRef, ...props }) => <BRStyled ref={innerRef} {...props} />;

export default BR;
