'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type LabelProps = Layout<ComponentProps<'label'>> & {
	content: string;
};

const LabelStyled = styled.label<LabelProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.LABEL, props)};
`;

const Label: FC<LabelProps> = ({ innerRef, ...props }) => (
	<LabelStyled ref={innerRef} {...props}>
		{props.content}
	</LabelStyled>
);

export default Label;
