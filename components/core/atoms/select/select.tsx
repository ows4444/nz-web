'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SelectProps extends ComponentProps<'select'> {
  children?: ReactNode;
}

const SelectStyled = styled.select<SelectProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.SELECT)};
`;

const Select: FC<SelectProps> = (props) => <SelectStyled {...props}/>;{children}</SelectStyled>;

/**
 * DONE
 */
export default Select;
