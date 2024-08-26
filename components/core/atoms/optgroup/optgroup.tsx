'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface OptGroupProps extends ComponentProps<'optgroup'> {
  children?: ReactNode;
}

const OptGroupStyled = styled.optgroup<OptGroupProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.OPTGROUP)};
`;

const OptGroup: FC<OptGroupProps> = (props) => <OptGroupStyled {...props}/>;{children}</OptGroupStyled>;

/**
 * DONE
 */
export default OptGroup;
