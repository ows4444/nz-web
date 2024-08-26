'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SupProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const SupStyled = styled.sup<Partial<SupProps>>`${({ theme }) => theme&&theme.generateCSS(Components.SUP)}`;

/**
 * DONE
 */
const Sup: FC<SupProps> = ({ content, ...rest }: SupProps) => <SupStyled {...rest}>{content}</SupStyled>;

export default Sup;
