'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type CaptionProps = Layout<ComponentProps<'caption'>>;

const CaptionStyled = styled.caption<CaptionProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.CAPTION, props)};
`;

const Caption: FC<CaptionProps> = (props) => <CaptionStyled {...props} />;

export default Caption;
