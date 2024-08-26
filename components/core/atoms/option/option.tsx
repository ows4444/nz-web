'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface OptionProps extends ComponentProps<'option'> {
  content: string;
}

const OptionStyled = styled.option<Omit<OptionProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.OPTION)};
`;

/**
 * DONE
 */
const Option: FC<OptionProps> = ({ content, ...rest }: OptionProps) => <OptionStyled {...rest}>{content}</OptionStyled>;

export default Option;
