'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface OptionProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const OptionStyled = styled.option<Partial<OptionProps>>`${({ theme }) => theme&&theme.generateCSS(Components.OPTION)};`;

/**
 * DONE
 */
const Option: FC<OptionProps> = ({ content, ...rest }: OptionProps) => <OptionStyled {...rest}>{content}</OptionStyled>;

export default Option;
