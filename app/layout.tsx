import type React from 'react';

import StyledComponentProvider from '@lib/styled-component.provider';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <StyledComponentProvider>{children}</StyledComponentProvider>
    </body>
  </html>
);
export default Layout;
