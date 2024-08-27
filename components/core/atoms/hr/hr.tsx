'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Components } from '@styles/theme/components';
import { Theme } from '@styles/theme';
export interface HRProps extends ComponentProps<'hr'> {
  theme?: Theme;
}

const HRStyled = styled.hr<HRProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.HR,props)};
`;

const HR: FC<HRProps> = () => <HRStyled />;

/**
 * DONE
 */
export default HR;
