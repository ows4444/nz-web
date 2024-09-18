'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type ColgroupProps = Layout<ComponentProps<'colgroup'>>;

const ColgroupStyled = styled.colgroup<ColgroupProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.COLGROUP, props)};
`;

const Colgroup: FC<ColgroupProps> = (props) => <ColgroupStyled {...props} />;

export default Colgroup;
