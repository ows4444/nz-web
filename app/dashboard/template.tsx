import React from 'react';

import AuthTemplate from '@components/templates/auth.template';

export default async function LoginTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
	return <AuthTemplate>{children}</AuthTemplate>;
}
