import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/signup', '/page-builder'];

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.includes(path);
	const isPublicRoute = publicRoutes.includes(path);

	const cookie = cookies().get('connect.sid')?.value;

	const session = { userId: cookie };

	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL('/login', req.nextUrl));
	}

	if (isPublicRoute && session?.userId) {
		return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
	}

	return NextResponse.next();
}
