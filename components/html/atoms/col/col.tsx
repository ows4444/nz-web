'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface ColProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const ColStyled = styled.col<ColProps>``;

const Col: FC<ColProps> = ({ children, ...rest }) => <ColStyled {...rest}>{children}</ColStyled>;

/**
 * @name Col
 * @description Col
 * @param {ColProps} props
 * @returns {React.ReactElement}
 * @example <Col> </Col>
 * DONE
 */
export default Col;
