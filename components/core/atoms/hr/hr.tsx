'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
export interface HRProps extends HTMLAttributes<HTMLElement> {
    theme?: Theme;
}
const HRStyled = styled.hr<Partial<HRProps>>``;
const HR: FC<HRProps> = () => <HRStyled />;

/**
 * DONE
 */
export default HR;
