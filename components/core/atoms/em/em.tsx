'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface EMProps extends ComponentProps<'em'> {
  children?: ReactNode;
}

const EMStyled = styled.em<EMProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.EM, props)};
`;

const EM: FC<EMProps> = (props) => <EMStyled {...props} />;

/**
 * DONE
 */
export default EM;
