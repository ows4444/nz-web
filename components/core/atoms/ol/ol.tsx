'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type OlProps = Layout<ComponentProps<'ol'>>;

const OlStyled = styled.ol<OlProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.OL, props)};
`;

const Ol: FC<OlProps> = (props) => <OlStyled {...props} />;

export default Ol;
