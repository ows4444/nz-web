'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type AsideProps = Layout<ComponentProps<'aside'>>;

const AsideStyled = styled.aside<AsideProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.ASIDE, props)};
`;
const Aside: FC<AsideProps> = ({ innerRef, ...props }) => <AsideStyled ref={innerRef} {...props} />;

export default Aside;
