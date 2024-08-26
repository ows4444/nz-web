'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
export interface ArticleProps extends ComponentProps<'article'> {
  children?: ReactNode;
}
const ArticleStyled = styled.article<ArticleProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.ARTICLE)};
`;
const Article: FC<ArticleProps> = ({ children, ...rest }) => <ArticleStyled {...rest}>{children}</ArticleStyled>;

/**
 * DONE
 */
export default Article;
