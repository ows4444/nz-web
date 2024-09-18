'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type AreaProps = Layout<ComponentProps<'area'>>;

const AreaStyled = styled.area<AreaProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.AREA, props)};
`;
const Area: FC<AreaProps> = (props) => <AreaStyled {...props} />;

export default Area;
