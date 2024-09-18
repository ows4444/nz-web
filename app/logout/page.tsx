'use client';

import logout from '@server/logout';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import type React from 'next';

export default function Logout() {
	const [_isLogout, logoutAction] = useFormState(logout, { message: '' });

	useEffect(() => {
		logoutAction();
	}, [logoutAction]);

	return <div>Loading...</div>;
}
