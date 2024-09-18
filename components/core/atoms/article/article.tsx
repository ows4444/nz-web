'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type ArticleProps = Layout<ComponentProps<'article'>>;

const ArticleStyled = styled.article<ArticleProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.ARTICLE, props)};
`;
const Article: FC<ArticleProps> = (props) => <ArticleStyled {...props} />;

export default Article;
