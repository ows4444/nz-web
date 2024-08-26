'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Components } from '@styles/theme/components';
import { Theme } from '@styles/theme';
export interface BRProps extends HTMLAttributes<HTMLElement> {
    theme?: Theme;
}
const BRStyled = styled.br<Partial<BRProps>>`${({ theme }) => theme&&theme.generateCSS(Components.BR)};`;
const BR: FC<BRProps> = () => <BRStyled />;

/**
 * DONE
 */
export default BR;
