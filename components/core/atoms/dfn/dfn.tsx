'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type DfnProps = Layout<ComponentProps<'dfn'>>;

const DfnStyled = styled.dfn<DfnProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.DFN, props)};
`;

const Dfn: FC<DfnProps> = (props) => <DfnStyled {...props} />;

export default Dfn;
