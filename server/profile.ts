'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { API_URL } from 'constants/api';

export interface Payload {
  ShouldFailed: boolean;
  redirectTo: string;
}

export interface ProfileResponse {
  user?: object;
}

export default async function profile(_prevState: any, payload: Payload) {
  let isFailed = false;
  try {
    const cookie = cookies().get('connect.sid');
    if (!cookie) {
      isFailed = true;
      return _prevState;
    } else {
      const res = await fetch(`${API_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `${cookie.name}=${cookie.value};`,
        },
      });

      if (!res.ok) {
        isFailed = true;
        return _prevState;
      } else {
        const data: ProfileResponse = await res.json();
        return data;
      }
    }
  } catch (error) {
    console.error('Login error:', error);
    isFailed = true;
    return _prevState;
  } finally {
    if (isFailed && payload.ShouldFailed) {
      redirect(payload.redirectTo);
    }
  }
}
