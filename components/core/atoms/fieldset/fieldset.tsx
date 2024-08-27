'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface FieldsetProps extends ComponentProps<'fieldset'> {
  children?: ReactNode;
}

const FieldsetStyled = styled.fieldset<FieldsetProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.FIELDSET)};
`;

const Fieldset: FC<FieldsetProps> = (props) => <FieldsetStyled {...props} />;

/**
 * DONE
 */
export default Fieldset;
