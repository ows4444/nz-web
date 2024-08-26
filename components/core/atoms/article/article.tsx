'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
export interface ArticleProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}
const ArticleStyled = styled.article<ArticleProps>`${({ theme }) => theme&&theme.generateCSS(Components.ARTICLE)};`;
const Article: FC<ArticleProps> = ({ children, ...rest }) => <ArticleStyled {...rest}>{children}</ArticleStyled>;

/**
 * DONE 
 */
export default Article;
