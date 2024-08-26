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
  ${({ theme }) => theme && theme.generateCSS(Components.MARK)};
`;

const Mark: FC<MarkProps> = ({ children, ...rest }) => <MarkStyled {...rest}>{children}</MarkStyled>;

/**
 * DONE
 */
export default Mark;
