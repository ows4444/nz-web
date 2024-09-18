'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type BProps = Layout<ComponentProps<'b'>> & {
	content: string;
};
const BStyled = styled.b<BProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.B, props)};
`;

const B: FC<BProps> = (props) => <BStyled {...props}>{props.content}</BStyled>;

export default B;
