'use client';

import React, { ComponentProps, FC, forwardRef } from 'react';
import styled from 'styled-components';

import { Section } from '@components/core/atoms';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type ContainerProps = Layout<ComponentProps<'div'>>;

const ContainerStyled = styled(Section)<ContainerProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.CONTAINER, props)};
`;

const Container: FC<ContainerProps> = forwardRef(function Container(
	props: ContainerProps,
	ref: React.ForwardedRef<HTMLElement>
) {

console.log('Container', ref);

	return <ContainerStyled ref={ref} {...props} />;
});

export default Container;
