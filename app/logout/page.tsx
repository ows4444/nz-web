'use client';
import type React from 'next';
import { useFormState } from 'react-dom';
import logout from '@server/logout';
import { useEffect } from 'react';

export default function Logout() {
  const [_isLogout, logoutAction] = useFormState(logout, { message: '' });

  useEffect(() => {
    logoutAction();
  }, [logoutAction]);

  return <div>Loading...</div>;
}
