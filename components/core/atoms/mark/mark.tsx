'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface MarkProps extends ComponentProps<'mark'> {
  children?: ReactNode;
}

const MarkStyled = styled.mark<MarkProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.MARK, props)};
`;

const Mark: FC<MarkProps> = (props) => <MarkStyled {...props} />;

/**
 * DONE
 */
export default Mark;
