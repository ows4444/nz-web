import type React from 'next';

import StyledComponentProvider from '@lib/styled-component.providor';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <StyledComponentProvider>{children}</StyledComponentProvider>
    </body>
  </html>
);
export default Layout;
