'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type OptionProps = Layout<ComponentProps<'option'>> & {
	content: string;
};

const OptionStyled = styled.option<OptionProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.OPTION, props)};
`;

const Option: FC<OptionProps> = ({ innerRef, ...props }) => (
	<OptionStyled ref={innerRef} {...props}>
		{props.content}
	</OptionStyled>
);

export default Option;
