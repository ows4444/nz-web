'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type PictureProps = Layout<ComponentProps<'picture'>>;

const PictureStyled = styled.picture<PictureProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.PICTURE, props)};
`;

const Picture: FC<PictureProps> = ({ innerRef, ...props }) => <PictureStyled ref={innerRef} {...props} />;

export default Picture;
