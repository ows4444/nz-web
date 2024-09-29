'use client';

import { ComponentProps } from 'react';
import type React from 'next';
import styled from 'styled-components';

import Box from '@components/atoms/box/box';
import Container from '@components/atoms/container/container';
import { A, Footer, H1, Header, Li, Nav, P, Ul } from '@components/core/atoms';
import { Theme } from '@styles/theme';
import { Layout } from '@styles/theme/types';

type DashboardTemplateProps = Layout<ComponentProps<'section'>>;
const DashboardTemplateStyled = styled.section<DashboardTemplateProps & { theme: Theme }>``;
const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children, ...props }: DashboardTemplateProps) => (
	<Box
		$layout="grid"
		$width="100vw"
		$height="100vh"
		$gridTemplateAreas={[
			'Header',
			'Nav',
			'Container',
			'Container',
			'Container',
			'Container',
			'Container',
			'Container',
			'Container',
			'Container',
			'Container',
			'Container',
			'Container',
			'Footer'
		]}
	>
		<Header
			$layoutItem="grid-item"
			$gridArea="Header"
			$layout="flex"
			$alignItems="center"
			$justifyContent="center"
			$backgroundColor="backgroundDark"
			$color="black"
		>
			<H1 content="Nizaami" />
		</Header>
		<Nav $layoutItem="grid-item" $gridArea="Nav">
			<Ul $listStyle="none" $layout="flex" $alignItems="center" $padding="10px">
				<Li $marginRight="10px">
					<A
						href="/dashboard"
						title="Dashboard"
						$layout="block"
						$textDecoration="none"
						$paddingX="16px"
						$paddingY="24px"
					/>
				</Li>
				<Li $marginRight="10px">
					<A href="#news" title="News" $layout="block" $textDecoration="none" $paddingX="16px" $paddingY="24px" />
				</Li>
				<Li $marginRight="10px">
					<A href="#contact" title="Contact" $layout="block" $textDecoration="none" $paddingX="16px" $paddingY="24px" />
				</Li>
				<Li $marginRight="10px">
					<A href="#about" title="About" $layout="block" $textDecoration="none" $paddingX="16px" $paddingY="24px" />
				</Li>
			</Ul>
		</Nav>
		<Container $layoutItem="grid-item" $gridArea="Container" $margin="1rem" $overflow="auto">
			<DashboardTemplateStyled {...props}>{children}</DashboardTemplateStyled>
		</Container>
		<Footer
			$layoutItem="grid-item"
			$gridArea="Footer"
			$layout="flex"
			$alignItems="center"
			$justifyContent="center"
			$bottom="0px"
			$color="black"
			$backgroundColor="background"
		>
			<P content="© 2024 Nizaami. All rights reserved." />
		</Footer>
	</Box>
);

export default DashboardTemplate;
