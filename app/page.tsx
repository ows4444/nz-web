'use server';
import type React from 'next';
import HomeTemplate from '@components/templates/home.template';
import { H2 } from '@components/core/atoms';

export default async function Page() {
  return (
    <HomeTemplate>
      <H2 content="Home" />
    </HomeTemplate>
  );
}
