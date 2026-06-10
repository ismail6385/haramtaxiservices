'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, Loader2 } from 'lucide-react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [checking, setChecking] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    const supabase = useMemo(() => createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ), []);

    // Redirect if already logged in
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                const redirectTo = searchParams.get('redirectTo') || '/admin/dashboard';
                window.location.href = redirectTo;
            } else {
                setChecking(false);
            }
        });
    }, [supabase, searchParams]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
            if (authError) throw authError;

            // Full page navigation so middleware re-reads the new session cookie
            const redirectTo = searchParams.get('redirectTo') || '/admin/dashboard';
            window.location.href = redirectTo;
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
            setLoading(false);
        }
    };

    if (checking) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-neutral-900 rounded-3xl border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-10 relative overflow-hidden">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                <div className="text-center mb-10 relative z-10">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
                        <Lock className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                        Admin <span className="text-primary tracking-tighter">Login</span>
                    </h1>
                    <p className="text-neutral-500 text-sm">Secure Portal Access</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-neutral-400 text-xs uppercase tracking-widest ml-1">
                            Email Address
                        </Label>
                        <div className="relative group/field">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-600 transition-colors group-focus-within/field:text-primary" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@domain.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-12 h-14 bg-neutral-950 border-neutral-800 text-white placeholder:text-neutral-700 focus:border-primary focus:ring-1 focus:ring-primary/30 rounded-xl transition-all"
                                required
                                autoComplete="email"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-neutral-400 text-xs uppercase tracking-widest ml-1">
                            Password
                        </Label>
                        <div className="relative group/field">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-600 transition-colors group-focus-within/field:text-primary" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-12 h-14 bg-neutral-950 border-neutral-800 text-white placeholder:text-neutral-700 focus:border-primary focus:ring-1 focus:ring-primary/30 rounded-xl transition-all"
                                required
                                autoComplete="current-password"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-primary text-black hover:bg-neutral-100 hover:scale-[1.02] active:scale-95 transition-all font-bold py-7 rounded-xl text-lg shadow-[0_10px_20px_-10px_rgba(255,204,0,0.3)]"
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Log In To Admin'}
                    </Button>
                </form>

                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
        }>
            <LoginForm />
        </Suspense>
    );
}
