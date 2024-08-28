'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface OptionProps extends ComponentProps<'option'> {
  content: string;
}

const OptionStyled = styled.option<OptionProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.OPTION, props)};
`;

/**
 * DONE
 */
const Option: FC<OptionProps> = (props) => <OptionStyled {...props}>{props.content}</OptionStyled>;

export default Option;
