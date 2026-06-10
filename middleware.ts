import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Markdown content negotiation for homepage (RFC 7231 / Markdown for Agents)
    if (pathname === '/') {
        const accept = request.headers.get('accept') ?? '';
        if (accept.includes('text/markdown')) {
            const markdownUrl = new URL('/api/homepage-markdown', request.url);
            return NextResponse.rewrite(markdownUrl);
        }
    }

    // Protect admin routes (except login page)
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        const response = NextResponse.next();

        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return request.cookies.getAll();
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value, options }) => {
                            response.cookies.set(name, value, options);
                        });
                    },
                },
            }
        );

        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            const loginUrl = new URL('/admin/login', request.url);
            loginUrl.searchParams.set('redirectTo', pathname);
            return NextResponse.redirect(loginUrl);
        }

        return response;
    }

    // Protect admin API routes
    if (pathname.startsWith('/api/admin')) {
        const response = NextResponse.next();

        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return request.cookies.getAll();
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value, options }) => {
                            response.cookies.set(name, value, options);
                        });
                    },
                },
            }
        );

        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        return response;
    }

    // Pass pathname to root layout so it can skip site chrome on admin routes
    const res = NextResponse.next();
    res.headers.set('x-pathname', pathname);
    return res;
}

export const config = {
    matcher: ['/', '/admin/:path*', '/api/admin/:path*'],
};
