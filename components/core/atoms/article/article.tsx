'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
export interface ArticleProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}
const ArticleStyled = styled.article<ArticleProps>``;
const Article: FC<ArticleProps> = ({ children, ...rest }) => <ArticleStyled {...rest}>{children}</ArticleStyled>;

/**
 * @name Article
 * @description Article
 * @param {ArticleProps} props
 * @returns {React.ReactElement}
 * @example <Article> </Article>
 * DONE 
 */
export default Article;
