'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Components } from '@styles/theme/components';
import { Theme } from '@styles/theme';
export interface BProps extends ComponentProps<'b'> {
  content: string;
}
const BStyled = styled.b<BProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.B, props)};
`;

const B: FC<BProps> = (props) => <BStyled {...props}>{props.content}</BStyled>;

/**
 * DONE
 */
export default B;
