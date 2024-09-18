'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type EMProps = Layout<ComponentProps<'em'>>;

const EMStyled = styled.em<EMProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.EM, props)};
`;

const EM: FC<EMProps> = (props) => <EMStyled {...props} />;

export default EM;
