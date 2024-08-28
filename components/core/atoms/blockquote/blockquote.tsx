'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';

type BlockquoteProps = Layout<ComponentProps<'blockquote'>>;

const BlockquoteStyled = styled.blockquote<BlockquoteProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.BLOCKQUOTE, props)};
`;
const Blockquote: FC<BlockquoteProps> = (props) => <BlockquoteStyled {...props} />;

export default Blockquote;
