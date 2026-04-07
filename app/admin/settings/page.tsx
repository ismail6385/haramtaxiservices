'use client';

import { useEffect, useMemo, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { User, Lock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function SettingsPage() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [passwordMsg, setPasswordMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const supabase = useMemo(() => createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ), []);

    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            if (data.user?.email) setEmail(data.user.email);
        });
    }, [supabase]);

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordMsg(null);

        if (newPassword.length < 8) {
            setPasswordMsg({ type: 'error', text: 'Password must be at least 8 characters.' });
            return;
        }
        if (newPassword !== confirmPassword) {
            setPasswordMsg({ type: 'error', text: 'Passwords do not match.' });
            return;
        }

        setPasswordLoading(true);
        const { error } = await supabase.auth.updateUser({ password: newPassword });
        setPasswordLoading(false);

        if (error) {
            setPasswordMsg({ type: 'error', text: error.message });
        } else {
            setPasswordMsg({ type: 'success', text: 'Password updated successfully.' });
            setNewPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className="text-white max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Account Settings
                </h1>
                <p className="text-neutral-400 mt-1">Manage your admin profile and preferences</p>
            </div>

            <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
                {/* Profile Info */}
                <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        Profile Information
                    </h2>
                    <div className="space-y-2 max-w-md">
                        <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
                        <Input
                            id="email"
                            value={email}
                            disabled
                            className="bg-neutral-900 border-neutral-700 text-white opacity-70"
                        />
                        <p className="text-xs text-neutral-500">To change your email, contact your hosting provider.</p>
                    </div>
                </div>

                <Separator className="bg-neutral-700" />

                {/* Password Change */}
                <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-primary" />
                        Change Password
                    </h2>
                    <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
                        <div className="space-y-2">
                            <Label htmlFor="new-pass" className="text-neutral-300">New Password</Label>
                            <Input
                                id="new-pass"
                                type="password"
                                placeholder="Min. 8 characters"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="bg-neutral-900 border-neutral-700 text-white"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirm-pass" className="text-neutral-300">Confirm New Password</Label>
                            <Input
                                id="confirm-pass"
                                type="password"
                                placeholder="Repeat new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="bg-neutral-900 border-neutral-700 text-white"
                                required
                            />
                        </div>

                        {passwordMsg && (
                            <div className={`flex items-center gap-2 p-3 rounded-lg text-sm border ${
                                passwordMsg.type === 'success'
                                    ? 'bg-green-500/10 border-green-500/20 text-green-400'
                                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                            }`}>
                                {passwordMsg.type === 'success'
                                    ? <CheckCircle className="w-4 h-4 shrink-0" />
                                    : <AlertCircle className="w-4 h-4 shrink-0" />
                                }
                                {passwordMsg.text}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="bg-primary text-black hover:bg-primary/90 font-bold"
                            disabled={passwordLoading}
                        >
                            {passwordLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                            Update Password
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
