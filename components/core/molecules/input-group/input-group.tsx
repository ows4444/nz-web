'use client';

import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import { Div } from '@components/core/atoms';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type InputGroupProps = Layout<ComponentProps<'div'>>;

const InputGroupStyled = styled(Div)<InputGroupProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.INPUT_GROUP, props)};
`;

const InputGroup: React.FC<InputGroupProps> = ({ innerRef, ...props }) => (
	<InputGroupStyled ref={innerRef} {...props} />
);

export default InputGroup;
