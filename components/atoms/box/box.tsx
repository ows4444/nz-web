'use client';

import React, { ComponentProps, forwardRef } from 'react';
import styled from 'styled-components';

import { Div } from '@components/core/atoms';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type BoxProps = Layout<ComponentProps<'div'>>;

const BoxStyled = styled(Div)<BoxProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.BOX, props)};
`;

const Box = forwardRef(function Bo(props, ref: any): any {
	return <BoxStyled {...props} ref={ref} />;
});

// const Box: FC<BoxProps> = (props) =>

// <BoxStyled ref ={innerRef} {...props} />;

export default Box;
