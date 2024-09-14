import type React from 'react';
import type { Metadata } from 'next';

import StyledComponentProvider from '@lib/styled-component.provider';

export const metadata: Metadata = {
  title: 'Nizaami | Home',
  description: 'Nizaami is a full-stack TypeScript framework for building web applications.',
};

export default function Layout(props: any) {
  return (
    <html lang="en">
      <body>
        <StyledComponentProvider>{props.children}</StyledComponentProvider>
      </body>
    </html>
  );
}
