'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';

type ArticleProps = Layout<ComponentProps<'article'>>;

const ArticleStyled = styled.article<ArticleProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.ARTICLE, props)};
`;
const Article: FC<ArticleProps> = (props) => <ArticleStyled {...props} />;

export default Article;
