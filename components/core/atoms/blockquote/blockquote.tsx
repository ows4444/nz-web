'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
export interface BlockquoteProps extends ComponentProps<'blockquote'> {
  theme?: Theme;
  children?: ReactNode;
}
const BlockquoteStyled = styled.blockquote<BlockquoteProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.BLOCKQUOTE)};
`;
const Blockquote: FC<BlockquoteProps> = ({ children, ...rest }) => (
  <BlockquoteStyled {...rest}>{children}</BlockquoteStyled>
);

/**
 * DONE
 */
export default Blockquote;
