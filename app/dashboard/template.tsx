import React from 'react';

import DashboardTemplate from '@components/templates/dashboard.template';

export default async function LayoutTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
	return <DashboardTemplate>{children}</DashboardTemplate>;
}
