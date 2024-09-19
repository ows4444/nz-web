import { NextResponse } from 'next/server';

import { ComponentResponse } from '@app/types';

export async function GET() {
	const ComponentResponse: ComponentResponse = {
		name: 'BOX',

		props: {},
		children: [
			{
				key: 'PUBLIC_FOOTER',
				name: 'DIV',
				props: {
					$layout: 'flex',
					$justifyContent: 'space-between',
					$alignItems: 'center',
					$padding: '8px'
				},
				children: [
					{
						key: 'PUBLIC_FOOTER_TITLE',
						name: 'H1',
						props: { content: 'Public Footer' }
					}
				]
			}
		]
	};

	return NextResponse.json(ComponentResponse);
}
