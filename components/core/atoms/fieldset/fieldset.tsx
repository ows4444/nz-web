'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type FieldsetProps = Layout<ComponentProps<'fieldset'>>;

const FieldsetStyled = styled.fieldset<FieldsetProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.FIELDSET, props)};
`;

const Fieldset: FC<FieldsetProps> = ({ innerRef, ...props }) => <FieldsetStyled ref={innerRef} {...props} />;

export default Fieldset;
