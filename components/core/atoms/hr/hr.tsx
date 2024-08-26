'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Components } from '@styles/theme/components';
import { Theme } from '@styles/theme';
export interface HRProps extends HTMLAttributes<HTMLElement> {
    theme?: Theme;
}
const HRStyled = styled.hr<Partial<HRProps>>`${({ theme }) => theme&&theme.generateCSS(Components.HR)};`;
const HR: FC<HRProps> = () => <HRStyled />;

/**
 * DONE
 */
export default HR;
