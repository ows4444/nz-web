'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface InsProps extends ComponentProps<'ins'> {
  content: string;
}

const InsStyled = styled.ins<InsProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.INS, props)};
`;

/**
 * DONE
 */
const Ins: FC<InsProps> = (props) => <InsStyled {...props}>{props.content}</InsStyled>;

export default Ins;
