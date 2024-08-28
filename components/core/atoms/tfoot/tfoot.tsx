'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface TFootProps extends ComponentProps<'tfoot'> {
  children?: ReactNode;
}

const TFootStyled = styled.tfoot<TFootProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.TFOOT, props)};
`;

const TFoot: FC<TFootProps> = (props) => <TFootStyled {...props} />;

/**
 * DONE
 */
export default TFoot;
