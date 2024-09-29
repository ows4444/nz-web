import type React from 'next';

import { Box } from '@components/atoms';
import { H2, H6 } from '@components/core/atoms';

export default async function Page({ params }: Readonly<{ params: any }>) {
	return (
		<>
			<H2 content={`/${params.slug}`} />

			<Box $width="200px" $border={'1px solid black'} $height="500px">
				{[
					{
						content: 'heading',
						key: 'hi',
						$draggable: true,
						$droppable: true,
						$dragType: 'H6',
						$acceptsDropTypes: ['H6']
					},
					{
						content: 'heading',
						key: 'ho',
						$draggable: true,
						$droppable: true,
						$dragType: 'H6',
						$acceptsDropTypes: ['H6']
					}
				].map(({ key, ...props }) => (
					<H6 key={key} $textAlign="center" {...props} />
				))}
			</Box>
		</>
	);
}
