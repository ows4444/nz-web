'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
export interface BRProps extends HTMLAttributes<HTMLElement> {
    theme?: Theme;
}
const BRStyled = styled.br<Partial<BRProps>>``;
const BR: FC<BRProps> = () => <BRStyled />;

/**
 * DONE
 */
export default BR;
