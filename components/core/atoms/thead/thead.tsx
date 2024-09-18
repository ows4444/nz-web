'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type THeadProps = Layout<ComponentProps<'thead'>>;

const THeadStyled = styled.thead<THeadProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.THEAD, props)};
`;

const THead: FC<THeadProps> = (props) => <THeadStyled {...props} />;

export default THead;
