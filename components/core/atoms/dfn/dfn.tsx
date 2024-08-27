'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DfnProps extends ComponentProps<'dfn'> {
  children?: ReactNode;
}

const DfnStyled = styled.dfn<DfnProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.DFN)};
`;

const Dfn: FC<DfnProps> = (props) => <DfnStyled {...props} />;

/**
 * DONE
 */
export default Dfn;
