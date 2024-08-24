'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface FieldsetProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const FieldsetStyled = styled.fieldset<FieldsetProps>``;

const Fieldset: FC<FieldsetProps> = ({ children, ...rest }) => <FieldsetStyled {...rest}>{children}</FieldsetStyled>;

/**
 * DONE
 */
export default Fieldset;
