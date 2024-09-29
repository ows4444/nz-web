import { NextResponse } from 'next/server';

export async function GET() {
	const ComponentResponse = {
		name: 'CONTAINER',
		props: {},
		children: [
			{
				key: 'Box1',
				name: 'BOX',
				props: {},
				children: [
					{
						key: 'Box1_Div1',
						name: 'DIV',
						props: {
							$layout: 'flex',
							$justifyContent: 'space-between',
							$alignItems: 'center',
							$padding: '8px'
						},
						children: [
							{
								key: 'Box1_Div1_H1',
								name: 'H3',
								props: { content: 'Header' }
							}
						]
					}
				]
			},
			{
				key: 'Box2',
				name: 'BOX',
				props: {},
				children: [
					{
						key: 'Box2_Form1',
						name: 'FORM',
						props: { $margin: '10px', $layout: 'grid' },
						children: [
							{
								name: 'CARD',
								key: 'Box2_Form1_Card1',
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
										key: 'Box2_Form1_Card1_CardHeader1',
										name: 'CARD_HEADER',
										children: [{ key: 'Box2_Form1_Card1_CardHeader1_H1', name: 'H1', props: { content: 'Login' } }]
									},
									{
										name: 'CARD_BODY',
										key: 'Box2_Form1_Card1_CardBody1',
										props: { $margin: '10px', $layout: 'grid' },
										children: [
											{
												key: 'Box2_Form1_Card1_CardBody1_InputGroup1',
												name: 'INPUT_GROUP',
												props: {
													$layout: 'grid'
												},
												children: [
													{
														key: 'Box2_Form1_Card1_CardBody1_InputGroup1_Label1',
														name: 'LABEL',
														props: {
															name: 'email',
															$margin: '2px',
															content: 'Email'
														}
													},
													{
														key: 'Box2_Form1_Card1_CardBody1_InputGroup1_Input1',
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
												key: 'Box2_Form1_Card1_CardBody1_InputGroup2',
												name: 'INPUT_GROUP',
												props: {
													$layout: 'grid'
												},
												children: [
													{
														key: 'Box2_Form1_Card1_CardBody1_InputGroup2_Label1',
														name: 'LABEL',
														props: {
															name: 'password',
															$margin: '2px',
															content: 'Password'
														}
													},
													{
														key: 'Box2_Form1_Card1_CardBody1_InputGroup2_Input1',
														name: 'INPUT',
														props: {
															name: 'password',
															$margin: '2px',
															type: 'password',
															validation: { required: true, maxLength: 32, minLength: 6 }
														}
													}
												]
											}
										]
									},
									{
										name: 'CARD_FOOTER',
										key: 'Box2_Form1_Card1_CardFooter1',
										children: [
											{
												key: 'Box2_Form1_Card1_CardFooter1_Button1',
												name: 'BUTTON',
												props: {
													title: 'Login',
													type: 'submit',
													$paddingX: '10px',
													$paddingY: '8px',
													$borderRadius: '50%'
												}
											}
										]
									}
								]
							}
						],
						router: {
							current: 'login',
							next: 'dashboard'
						},
						submit: {
							href: 'auth/login',
							method: 'POST'
						}
					}
				]
			},
			{
				key: 'Box3',
				name: 'BOX',
				props: {},
				children: [
					{
						key: 'Box3_Div1',
						name: 'DIV',
						props: {
							$layout: 'flex',
							$justifyContent: 'space-between',
							$alignItems: 'center',
							$padding: '8px'
						},
						children: [
							{
								key: 'Box3_Div1_H1',
								name: 'H3',
								props: { content: 'Footer' }
							}
						]
					}
				]
			}
		]
	};

	return NextResponse.json(ComponentResponse);
}
