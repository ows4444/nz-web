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
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.ARTICLE, props)};
`;
const Article: FC<ArticleProps> = (props) => <ArticleStyled {...props} />;

/**
 * DONE
 */
export default Article;
