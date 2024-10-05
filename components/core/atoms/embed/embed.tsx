'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type EmbedProps = Layout<ComponentProps<'embed'>>;

const EmbedStyled = styled.embed<EmbedProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.EMBED, props)};
`;

const Embed: FC<EmbedProps> = ({ innerRef, ...props }) => <EmbedStyled ref={innerRef} {...props} />;

export default Embed;
