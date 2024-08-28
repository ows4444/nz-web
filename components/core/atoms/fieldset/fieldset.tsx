'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type FieldsetProps = Layout<ComponentProps<'fieldset'>>;

const FieldsetStyled = styled.fieldset<FieldsetProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.FIELDSET, props)};
`;

const Fieldset: FC<FieldsetProps> = (props) => <FieldsetStyled {...props} />;

export default Fieldset;
