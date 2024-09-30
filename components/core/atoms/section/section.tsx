'use client';

import React, { forwardRef } from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type SectionProps = Layout<ComponentProps<'section'>>;

const SectionStyled = styled.section<SectionProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.SECTION, props)};
`;

const Section: FC<SectionProps> = forwardRef(function Section(
	props: SectionProps,
	ref: React.ForwardedRef<HTMLElement>
) {
	return <SectionStyled ref={ref} {...props} />;
});

export default Section;
