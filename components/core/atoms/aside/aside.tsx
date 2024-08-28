'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';
type AsideProps = Layout<ComponentProps<'aside'>>;

const AsideStyled = styled.aside<AsideProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.ASIDE, props)};
`;
const Aside: FC<AsideProps> = (props) => <AsideStyled {...props} />;

export default Aside;
