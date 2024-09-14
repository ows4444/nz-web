'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';
type TFootProps = Layout<ComponentProps<'tfoot'>>;

const TFootStyled = styled.tfoot<TFootProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.TFOOT, props)};
`;

const TFoot: FC<TFootProps> = (props) => <TFootStyled {...props} />;

export default TFoot;
