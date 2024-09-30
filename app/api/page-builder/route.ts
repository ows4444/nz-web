import { NextResponse } from 'next/server';

export async function GET() {
	// form builder component response
	const ComponentResponse = {
		name: 'CONTAINER',

		props: {
			$layout: 'flex',
			$justifyContent: 'center',
			$alignItems: 'center',
			$direction: 'column',
			$droppable: true,
			$acceptsDropTypes: ['H1', 'P'],
			$draggable: false,
			$dragType: 'P'
		},

		children: [
			{
				key: 'heading1',
				name: 'BOX',
				children: [
					{
						key: 'heading1',
						name: 'DIV',
						props: {
							$border: '1px solid #000',
							$borderRadius: '5px',
							$layout: 'flex',
							$width: '100%',
							$height: '100px',
							$droppable: true,
							$acceptsDropTypes: ['H1', 'P']
						},
						children: [
							{
								key: 'asdasd',
								name: 'P',
								props: {
									content: 'This is a paragraph',
									$draggable: false,
									$dragType: 'P'
								}
							}
						]
					},

					{
						key: 'paragraph1',
						name: 'P',
						props: {
							content: 'This is a paragraph',
							$draggable: true,
							$dragType: 'P'
						}
					}
				]
			}
		]
	};

	return NextResponse.json(ComponentResponse);
}
