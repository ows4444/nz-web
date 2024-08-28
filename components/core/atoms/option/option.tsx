'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type OptionProps = Layout<ComponentProps<'option'>> & {
  content: string;
};

const OptionStyled = styled.option<OptionProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.OPTION, props)};
`;

const Option: FC<OptionProps> = (props) => <OptionStyled {...props}>{props.content}</OptionStyled>;

export default Option;
