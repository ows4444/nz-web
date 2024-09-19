import { NextResponse } from 'next/server';

import { ComponentResponse } from '@app/types';

export async function GET() {
	const ComponentResponse: ComponentResponse = {
		component: {
			name: 'FORM',
			props: { $margin: '10px', $layout: 'grid' },
			children: [
				{
					name: 'CARD',
					key: 'CARD',
					props: {
						$layout: 'flex',
						$direction: 'column',
						$alignItems: 'center',
						$border: '2px solid',
						$margin: '8px',
						$padding: '8px'
					},
					children: [
						{
							key: 'CARD_HEADER',
							name: 'CARD_HEADER',
							children: [{ key: 'card-header-title', name: 'H1', props: { content: 'Login Form' } }]
						},
						{
							name: 'CARD_BODY',
							key: 'CARD_BODY',
							props: { $margin: '10px', $layout: 'grid' },
							children: [
								{
									key: 'INPUT_GROUP1',
									name: 'INPUT_GROUP',
									props: {
										$layout: 'grid'
									},
									children: [
										{
											key: 'LABEL2',
											name: 'LABEL',
											props: {
												name: 'email',
												$margin: '2px',
												content: 'Email'
											}
										},
										{
											key: 'INPUT1',
											name: 'INPUT',
											props: {
												name: 'email',
												$margin: '2px',
												type: 'email',
												autoComplete: 'on'
											}
										}
									]
								},
								{
									key: 'INPUT_GROUP2',
									name: 'INPUT_GROUP',
									props: {
										$layout: 'grid'
									},
									children: [
										{
											key: 'LABEL2',
											name: 'LABEL',
											props: {
												name: 'password',
												$margin: '2px',
												content: 'Password'
											}
										},
										{
											key: 'INPUT2',
											name: 'INPUT',
											props: {
												name: 'password',
												$margin: '2px',
												type: 'password'
											}
										}
									]
								}
							]
						},
						{
							name: 'CARD_FOOTER',
							key: 'CARD_FOOTER',
							children: [
								{
									key: 'submit',
									name: 'BUTTON',
									props: { type: 'submit', title: 'Login', $paddingX: '10px', $paddingY: '8px', $borderRadius: '50%' }
								}
							]
						}
					]
				}
			]
		},
		router: {
			current: '/login',
			next: '/dashboard'
		},
		submit: {
			href: 'http://localhost:4000/api/auth/login',
			method: 'POST'
		}
	};

	return NextResponse.json(ComponentResponse);
}
