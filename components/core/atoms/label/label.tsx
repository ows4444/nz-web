'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { ItemLayout } from '@components/types';

type LabelProps = ItemLayout<ComponentProps<'label'>> & {
  content: string;
};

const LabelStyled = styled.label<LabelProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.LABEL, props)};
`;

const Label: FC<LabelProps> = (props) => <LabelStyled {...props}>{props.content}</LabelStyled>;

export default Label;
