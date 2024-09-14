import React from 'react';
import { H1, H2 } from '@components/core/atoms';
import { Container } from '@components/atoms';

export default async function NotFount() {
  return (
    <Container
      $margin="10px"
      $padding="10px"
      $layout="flex"
      $direction="column"
      $justifyContent="center"
      $alignItems="center"
    >
      <H1 content="404" />
      <H2 content="Page Not Found" />
    </Container>
  );
}
