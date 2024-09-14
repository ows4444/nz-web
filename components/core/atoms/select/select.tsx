'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@styles/theme/types';
type SelectProps = Layout<ComponentProps<'select'>>;

const SelectStyled = styled.select<SelectProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.SELECT, props)};
`;

const Select: FC<SelectProps> = (props) => <SelectStyled {...props} />;

export default Select;
