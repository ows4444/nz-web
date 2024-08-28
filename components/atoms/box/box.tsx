'use client';
import React, { FC, ComponentProps } from 'react';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { BoxLayout } from '@components/types';
import Div from '@components/core/atoms/div/div';

type BoxProps = BoxLayout<ComponentProps<'div'>>;

const BoxStyled = styled(Div)<BoxProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.BOX, props)};
`;

const Box: FC<BoxProps> = (props) => <BoxStyled {...props} />;

export default Box;
