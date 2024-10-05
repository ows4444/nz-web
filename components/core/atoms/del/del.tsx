'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type DelProps = Layout<ComponentProps<'del'>>;

const DelStyled = styled.del<DelProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.DEL, props)};
`;

const DEL: FC<DelProps> = ({ innerRef, ...props }) => <DelStyled ref={innerRef} {...props} />;

export default DEL;
