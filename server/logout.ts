'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { API_URL } from 'constants/api';

export default async function logout(_prevState: Record<string, any>): Promise<any> {
  let isGuest = true;
  try {
    const cookie = cookies().get('connect.sid');
    if (!cookie) {
      return { message: 'Logout Error' };
    }
    const res = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Cookie: `${cookie.name}=${cookie.value};` },
    });
    const parsedRes = await res.json();

    if (!res.ok) {
      return parsedRes;
    }

    unSetAuthCookie();
    isGuest = false;
    return { message: 'Logout Successful' };
  } catch (error) {
    console.error('Login error:', error);
    return { message: 'Login Error' };
  } finally {
    if (!isGuest) redirect('/');
  }
}

const unSetAuthCookie = () => {
  const secure = true;
  const httpOnly = true;
  cookies().delete({
    name: 'connect.sid',
    secure: secure,
    httpOnly: httpOnly,
    // expires: new Date(jwtDecode(token).exp! * 1000),
  });
};
