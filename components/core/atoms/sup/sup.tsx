'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SupProps extends ComponentProps<'sup'> {
  content: string;
}

const SupStyled = styled.sup<SupProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.SUP)}
`;

/**
 * DONE
 */
const Sup: FC<SupProps> = (props) => <SupStyled {...props}>{props.content}</SupStyled>;

export default Sup;
