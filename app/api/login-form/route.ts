import { component } from '@components/index';
import { NextResponse } from 'next/server';

export async function GET() {
  const formComponent: component = {
    name: 'DIV',
    // props: { $margin: '10px', $layout: 'grid' },
    // children: [
    //   {
    //     name: 'CARD',
    //     key: 'CARD',

    //     props: {
    //       $layout: 'flex',
    //       $direction: 'column',
    //       $alignItems: 'center',
    //       $border: '2px solid',
    //       $margin: '8px',
    //       $padding: '8px',
    //     },

    //     children: [
    //       {
    //         key: 'CARD_HEADER',
    //         name: 'CARD_HEADER',

    //         children: [{ key: 'card-header-title', name: 'H1', props: { content: 'Login' } }],
    //       },
    //       {
    //         name: 'CARD_BODY',

    //         key: 'CARD_BODY',

    //         props: { $margin: '10px', $layout: 'grid' },

    //         children: [
    //           {
    //             key: 'INPUT_GROUP',
    //             name: 'INPUT_GROUP',

    //             props: {
    //               name: 'email',
    //               $margin: '8px',
    //               $layout: 'grid',
    //               label: 'Email',
    //               type: 'email',
    //               autoComplete: 'on',
    //             },
    //           },
    //           {
    //             key: 'INPUT_GROUP1',
    //             name: 'INPUT_GROUP',

    //             props: {
    //               name: 'password',
    //               $margin: '8px',
    //               $layout: 'grid',
    //               label: 'Password',
    //               type: 'password',
    //               autoComplete: 'on',
    //             },
    //           },
    //         ],
    //       },

    //       {
    //         name: 'CARD_FOOTER',
    //         key: 'CARD_FOOTER',

    //         children: [
    //           {
    //             key: 'submit',
    //             name: 'BUTTON',
    //             props: { type: 'submit', title: 'Login', $paddingX: '10px', $paddingY: '8px' },
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  };

  return NextResponse.json(formComponent);
}
