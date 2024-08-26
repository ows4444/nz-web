'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface ColProps extends ComponentProps<'col'> {
  children?: ReactNode;
}

const ColStyled = styled.col<ColProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.COL)};
`;

const Col: FC<ColProps> = (props) => <ColStyled {...props} />;

/**
 * DONE
 */
export default Col;
