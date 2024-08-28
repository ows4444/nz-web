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
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.SELECT, props)};
`;

const Select: FC<SelectProps> = (props) => <SelectStyled {...props} />;

/**
 * DONE
 */
export default Select;
