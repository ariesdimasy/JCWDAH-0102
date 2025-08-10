import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

    const user = "dimas"

    if (!user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|login).*)',

}