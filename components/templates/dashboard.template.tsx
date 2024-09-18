'use client';

import { ComponentProps } from 'react';
import type React from 'next';
import styled from 'styled-components';

import Box from '@components/atoms/box/box';
import Container from '@components/atoms/container/container';
import { A, Div, Footer, H1, Header, Input, Li, Nav, P, Ul } from '@components/core/atoms';
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

				<Li $marginRight="10px">
					<A
						href="#services"
						title="Services"
						$layout="block"
						$textDecoration="none"
						$paddingX="16px"
						$paddingY="24px"
					/>
					<Div className="dropdown-content">
						<A
							href="#service1"
							title="Service 1"
							$layout="block"
							$textDecoration="none"
							$paddingX="16px"
							$paddingY="24px"
						/>
						<A
							href="#service2"
							title="Service 2"
							$layout="block"
							$textDecoration="none"
							$paddingX="16px"
							$paddingY="24px"
						/>
						<A
							href="#service3"
							title="Service 3"
							$layout="block"
							$textDecoration="none"
							$paddingX="16px"
							$paddingY="24px"
						/>
					</Div>
				</Li>

				<Li className="dropdown" $marginRight="10px">
					<A href="#more" title="More" $layout="block" $textDecoration="none" $paddingY="24px" />
					<Div className="dropdown-content">
						<A href="#more1" title="More 1" $layout="block" $textDecoration="none" $paddingX="16px" $paddingY="24px" />
						<A href="#more2" title="More 2" $layout="block" $textDecoration="none" $paddingX="16px" $paddingY="24px" />
						<A href="#more3" title="More 3" $layout="block" $textDecoration="none" $paddingX="16px" $paddingY="24px" />
					</Div>
				</Li>

				<Li $marginRight="10px">
					<Input type="text" placeholder="Search..." />
				</Li>
			</Ul>
		</Nav>
		<Container $layoutItem="grid-item" $gridArea="Container" $marginY="10px" $overflow="auto">
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
