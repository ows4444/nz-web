'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type MainProps = Layout<ComponentProps<'main'>>;

const MainStyled = styled.main<MainProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.MAIN, props)};
`;

const Main: FC<MainProps> = (props) => <MainStyled {...props} />;

export default Main;
