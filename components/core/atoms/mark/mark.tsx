'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type MarkProps = Layout<ComponentProps<'mark'>>;

const MarkStyled = styled.mark<MarkProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.MARK, props)};
`;

const Mark: FC<MarkProps> = ({ innerRef, ...props }) => <MarkStyled ref={innerRef} {...props} />;

export default Mark;
