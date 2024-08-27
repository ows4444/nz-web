'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Components } from '@styles/theme/components';
import { Theme } from '@styles/theme';
export interface BRProps extends ComponentProps<'br'> {}

const BRStyled = styled.br<BRProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.BR, props)};
`;

const BR: FC<BRProps> = () => <BRStyled />;

/**
 * DONE
 */
export default BR;
