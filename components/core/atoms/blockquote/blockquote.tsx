'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type BlockquoteProps = Layout<ComponentProps<'blockquote'>>;

const BlockquoteStyled = styled.blockquote<BlockquoteProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.BLOCKQUOTE, props)};
`;
const Blockquote: FC<BlockquoteProps> = ({ innerRef, ...props }) => <BlockquoteStyled ref={innerRef} {...props} />;

export default Blockquote;
