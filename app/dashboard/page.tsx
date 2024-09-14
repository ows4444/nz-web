import type React from 'next';
import DashboardTemplate from '@components/templates/dashboard.template';
import { H2 } from '@components/core/atoms';

export default async function Page() {
  return (
    <DashboardTemplate>
      <H2 content="Dashboard" />
    </DashboardTemplate>
  );
}
