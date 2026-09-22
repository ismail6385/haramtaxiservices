'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
    User, Lock, Loader2, CheckCircle, AlertCircle,
    Building2, Phone, Mail, MapPin, ExternalLink,
    Globe, Database, MessageCircle, Save, RefreshCw,
    Percent, Clock,
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface BusinessSettings {
    company_name: string;
    whatsapp: string;
    email: string;
    address: string;
    tagline: string;
    vat_rate: string;
    business_hours_open: string;
    business_hours_close: string;
    business_days: string;
}

const DEFAULTS: BusinessSettings = {
    company_name: 'Haram Taxi Service',
    whatsapp: '966575806733',
    email: 'haramtaxiservice@gmail.com',
    address: 'Makkah Al-Mukarramah, Saudi Arabia',
    tagline: 'Premium taxi service across Saudi Arabia',
    vat_rate: '15',
    business_hours_open: '00:00',
    business_hours_close: '23:59',
    business_days: 'Mon-Sun',
};

function Section({ title, icon: Icon, children }: {
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center gap-2">
                <Icon className="w-4 h-4 text-brand-gold" />
                <h2 className="text-sm font-semibold text-white uppercase tracking-wider">{title}</h2>
            </div>
            <div className="p-6">{children}</div>
        </div>
    );
}

export default function SettingsPage() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [passwordMsg, setPasswordMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const [biz, setBiz] = useState<BusinessSettings>(DEFAULTS);
    const [bizLoading, setBizLoading] = useState(false);
    const [bizSaving, setBizSaving] = useState(false);
    const [bizTableExists, setBizTableExists] = useState(true);

    const [dbStatus, setDbStatus] = useState<'checking' | 'ok' | 'error'>('checking');
    const [bookingCount, setBookingCount] = useState<number | null>(null);

    const supabase = useMemo(() => createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ), []);

    const checkDb = useCallback(async () => {
        setDbStatus('checking');
        const { count, error } = await supabase
            .from('bookings')
            .select('id', { count: 'exact', head: true });
        if (error) { setDbStatus('error'); return; }
        setDbStatus('ok');
        setBookingCount(count ?? 0);
    }, [supabase]);

    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            if (data.user?.email) setEmail(data.user.email);
        });
        checkDb();

        // Load business settings
        const loadBiz = async () => {
            setBizLoading(true);
            const { data, error } = await supabase
                .from('site_settings')
                .select('key, value');
            if (error?.code === '42P01') { setBizTableExists(false); setBizLoading(false); return; }
            if (!error && data) {
                const map: Record<string, string> = {};
                data.forEach((r: { key: string; value: string }) => { map[r.key] = r.value; });
                setBiz({
                    company_name: map.company_name ?? DEFAULTS.company_name,
                    whatsapp: map.whatsapp ?? DEFAULTS.whatsapp,
                    email: map.email ?? DEFAULTS.email,
                    address: map.address ?? DEFAULTS.address,
                    tagline: map.tagline ?? DEFAULTS.tagline,
                    vat_rate: map.vat_rate ?? DEFAULTS.vat_rate,
                    business_hours_open: map.business_hours_open ?? DEFAULTS.business_hours_open,
                    business_hours_close: map.business_hours_close ?? DEFAULTS.business_hours_close,
                    business_days: map.business_days ?? DEFAULTS.business_days,
                });
            }
            setBizLoading(false);
        };
        loadBiz();
    }, [supabase, checkDb]);

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

    const handleBizSave = async () => {
        if (!bizTableExists) return;
        setBizSaving(true);
        const entries = Object.entries(biz).map(([key, value]) => ({ key, value }));
        const { error } = await supabase.from('site_settings').upsert(entries, { onConflict: 'key' });
        setBizSaving(false);
        if (error) toast.error('Failed to save settings');
        else toast.success('Business settings saved');
    };

    return (
        <div className="min-h-screen bg-brand-navy text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

                <div className="mb-2">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200">
                        Settings
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">Admin account &amp; business configuration</p>
                </div>

                {/* ── System Status ── */}
                <Section title="System Status" icon={Database}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className={cn(
                                'w-2.5 h-2.5 rounded-full',
                                dbStatus === 'ok' ? 'bg-green-500 animate-pulse' :
                                    dbStatus === 'error' ? 'bg-red-500' : 'bg-yellow-500 animate-pulse'
                            )} />
                            <div>
                                <p className="text-sm font-medium text-white">
                                    {dbStatus === 'ok' ? 'Supabase Connected' :
                                        dbStatus === 'error' ? 'Connection Error' : 'Checking…'}
                                </p>
                                {dbStatus === 'ok' && bookingCount !== null && (
                                    <p className="text-xs text-slate-500">{bookingCount} bookings in database</p>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={checkDb}
                            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                        >
                            <RefreshCw className="w-3.5 h-3.5" />
                            Refresh
                        </button>
                    </div>
                </Section>

                {/* ── Business Info ── */}
                <Section title="Business Information" icon={Building2}>
                    {!bizTableExists && (
                        <div className="mb-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs">
                            <strong>Setup required:</strong> Run this in Supabase SQL Editor to enable editable business settings:
                            <pre className="mt-2 font-mono bg-black/30 rounded p-2 overflow-x-auto whitespace-pre-wrap">
{`CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL DEFAULT ''
);
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin can manage settings" ON site_settings
  FOR ALL TO authenticated USING (true) WITH CHECK (true);`}
                            </pre>
                        </div>
                    )}
                    {bizLoading ? (
                        <div className="flex items-center gap-2 text-slate-500 text-sm py-4">
                            <Loader2 className="w-4 h-4 animate-spin" />Loading…
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label className="text-slate-400 text-xs flex items-center gap-1">
                                        <Building2 className="w-3 h-3" /> Company Name
                                    </Label>
                                    <Input
                                        value={biz.company_name}
                                        onChange={e => setBiz(b => ({ ...b, company_name: e.target.value }))}
                                        disabled={!bizTableExists}
                                        className="bg-slate-800/50 border-slate-700 text-white"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-slate-400 text-xs flex items-center gap-1">
                                        <Phone className="w-3 h-3" /> WhatsApp Number
                                    </Label>
                                    <Input
                                        value={biz.whatsapp}
                                        onChange={e => setBiz(b => ({ ...b, whatsapp: e.target.value }))}
                                        disabled={!bizTableExists}
                                        placeholder="966XXXXXXXXX"
                                        className="bg-slate-800/50 border-slate-700 text-white"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-slate-400 text-xs flex items-center gap-1">
                                        <Mail className="w-3 h-3" /> Business Email
                                    </Label>
                                    <Input
                                        value={biz.email}
                                        onChange={e => setBiz(b => ({ ...b, email: e.target.value }))}
                                        disabled={!bizTableExists}
                                        className="bg-slate-800/50 border-slate-700 text-white"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-slate-400 text-xs flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> Address
                                    </Label>
                                    <Input
                                        value={biz.address}
                                        onChange={e => setBiz(b => ({ ...b, address: e.target.value }))}
                                        disabled={!bizTableExists}
                                        className="bg-slate-800/50 border-slate-700 text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <Label className="text-slate-400 text-xs">Tagline</Label>
                                <Textarea
                                    value={biz.tagline}
                                    onChange={e => setBiz(b => ({ ...b, tagline: e.target.value }))}
                                    disabled={!bizTableExists}
                                    rows={2}
                                    className="bg-slate-800/50 border-slate-700 text-white resize-none"
                                />
                            </div>
                            {bizTableExists && (
                                <Button
                                    onClick={handleBizSave}
                                    disabled={bizSaving}
                                    className="bg-brand-gold text-brand-navy hover:bg-yellow-400 font-bold"
                                >
                                    {bizSaving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                                    Save Changes
                                </Button>
                            )}
                        </div>
                    )}
                </Section>

                {/* ── VAT & Pricing ── */}
                <Section title="VAT & Pricing" icon={Percent}>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <Label className="text-slate-400 text-xs flex items-center gap-1">
                                    <Percent className="w-3 h-3" /> VAT Rate (%)
                                </Label>
                                <Input
                                    type="number"
                                    min="0"
                                    max="100"
                                    step="0.01"
                                    value={biz.vat_rate}
                                    onChange={e => setBiz(b => ({ ...b, vat_rate: e.target.value }))}
                                    disabled={!bizTableExists}
                                    placeholder="15"
                                    className="bg-slate-800/50 border-slate-700 text-white"
                                />
                                <p className="text-xs text-slate-600">Currently used: {biz.vat_rate || '15'}% on all invoices & receipts</p>
                            </div>
                        </div>
                        {bizTableExists && (
                            <Button
                                onClick={handleBizSave}
                                disabled={bizSaving}
                                className="bg-brand-gold text-brand-navy hover:bg-yellow-400 font-bold"
                            >
                                {bizSaving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                                Save
                            </Button>
                        )}
                    </div>
                </Section>

                {/* ── Business Hours ── */}
                <Section title="Business Hours" icon={Clock}>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-1.5">
                                <Label className="text-slate-400 text-xs flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> Opening Time
                                </Label>
                                <Input
                                    type="time"
                                    value={biz.business_hours_open}
                                    onChange={e => setBiz(b => ({ ...b, business_hours_open: e.target.value }))}
                                    disabled={!bizTableExists}
                                    className="bg-slate-800/50 border-slate-700 text-white"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label className="text-slate-400 text-xs flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> Closing Time
                                </Label>
                                <Input
                                    type="time"
                                    value={biz.business_hours_close}
                                    onChange={e => setBiz(b => ({ ...b, business_hours_close: e.target.value }))}
                                    disabled={!bizTableExists}
                                    className="bg-slate-800/50 border-slate-700 text-white"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label className="text-slate-400 text-xs">Operating Days</Label>
                                <Input
                                    value={biz.business_days}
                                    onChange={e => setBiz(b => ({ ...b, business_days: e.target.value }))}
                                    disabled={!bizTableExists}
                                    placeholder="Mon-Sun"
                                    className="bg-slate-800/50 border-slate-700 text-white"
                                />
                            </div>
                        </div>
                        {bizTableExists && (
                            <Button
                                onClick={handleBizSave}
                                disabled={bizSaving}
                                className="bg-brand-gold text-brand-navy hover:bg-yellow-400 font-bold"
                            >
                                {bizSaving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                                Save
                            </Button>
                        )}
                    </div>
                </Section>

                {/* ── Account ── */}
                <Section title="Account" icon={User}>
                    <div className="space-y-2 max-w-sm mb-6">
                        <Label className="text-slate-400 text-xs flex items-center gap-1">
                            <Mail className="w-3 h-3" /> Email Address
                        </Label>
                        <Input
                            value={email}
                            disabled
                            className="bg-slate-800/50 border-slate-700 text-slate-400"
                        />
                        <p className="text-xs text-slate-600">Email cannot be changed here.</p>
                    </div>

                    <Separator className="bg-slate-800 mb-6" />

                    <div className="flex items-center gap-2 mb-4">
                        <Lock className="w-4 h-4 text-brand-gold" />
                        <h3 className="text-sm font-semibold text-white">Change Password</h3>
                    </div>
                    <form onSubmit={handlePasswordChange} className="space-y-4 max-w-sm">
                        <div className="space-y-1.5">
                            <Label className="text-slate-400 text-xs">New Password</Label>
                            <Input
                                type="password"
                                placeholder="Min. 8 characters"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                                className="bg-slate-800/50 border-slate-700 text-white"
                                required
                            />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-slate-400 text-xs">Confirm New Password</Label>
                            <Input
                                type="password"
                                placeholder="Repeat new password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                className="bg-slate-800/50 border-slate-700 text-white"
                                required
                            />
                        </div>
                        {passwordMsg && (
                            <div className={cn(
                                'flex items-center gap-2 p-3 rounded-lg text-sm border',
                                passwordMsg.type === 'success'
                                    ? 'bg-green-500/10 border-green-500/20 text-green-400'
                                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                            )}>
                                {passwordMsg.type === 'success'
                                    ? <CheckCircle className="w-4 h-4 shrink-0" />
                                    : <AlertCircle className="w-4 h-4 shrink-0" />}
                                {passwordMsg.text}
                            </div>
                        )}
                        <Button
                            type="submit"
                            disabled={passwordLoading}
                            className="bg-brand-gold text-brand-navy hover:bg-yellow-400 font-bold"
                        >
                            {passwordLoading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                            Update Password
                        </Button>
                    </form>
                </Section>

                {/* ── Quick Links ── */}
                <Section title="Quick Links" icon={ExternalLink}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                            { label: 'Live Website', href: 'https://haramtaxiservice.com', icon: Globe, color: 'text-blue-400 border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20' },
                            { label: 'Supabase Dashboard', href: 'https://supabase.com/dashboard', icon: Database, color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20' },
                            { label: 'WhatsApp Business', href: `https://wa.me/${DEFAULTS.whatsapp}`, icon: MessageCircle, color: 'text-green-400 border-green-500/20 bg-green-500/10 hover:bg-green-500/20' },
                        ].map(l => (
                            <a
                                key={l.label}
                                href={l.href}
                                target="_blank"
                                rel="noreferrer"
                                className={cn(
                                    'flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium transition-colors',
                                    l.color
                                )}
                            >
                                <l.icon className="w-4 h-4 shrink-0" />
                                {l.label}
                                <ExternalLink className="w-3 h-3 ml-auto opacity-60" />
                            </a>
                        ))}
                    </div>
                </Section>

            </div>
        </div>
    );
}
