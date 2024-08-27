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
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.OPTGROUP,props)};
`;

const OptGroup: FC<OptGroupProps> = (props) => <OptGroupStyled {...props} />;

/**
 * DONE
 */
export default OptGroup;
