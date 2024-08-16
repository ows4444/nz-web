'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ResponseState } from '../app/login/login.response';
import { API_URL } from 'constants/api';

export default async function login(_prevState: Record<string, any>, formData: FormData): Promise<ResponseState> {
  let isGuest = true;
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const parsedRes = await res.json();
    if (!res.ok) {
      return parsedRes;
    }

    setAuthCookie(res);
    isGuest = false;
    return { message: 'Login Successful' };
  } catch (error) {
    isGuest = true;
    console.error('Login error:', error);
    return { message: 'Login Error' };
  } finally {
    if (!isGuest) redirect('/');
  }
}

const setAuthCookie = (response: Response) => {
  const setCookieHeader = response.headers.get('Set-Cookie');
  if (setCookieHeader) {
    const cookieValue = setCookieHeader.split(';')[0].split('=')[1];

    const secure = true;
    const httpOnly = true;
    cookies().set({
      name: 'connect.sid',
      value: cookieValue,
      secure: secure,
      httpOnly: httpOnly,
      // expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};
