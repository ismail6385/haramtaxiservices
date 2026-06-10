'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import {
    LayoutDashboard,
    CalendarCheck,
    Car,
    MapPin,
    Wallet,
    Settings,
    LogOut,
    Menu,
    X,
    BarChart2,
    Users,
    UserCheck,
    DollarSign,
    Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const menuItems = [
    { name: 'Dashboard',  href: '/admin/dashboard',  icon: LayoutDashboard },
    { name: 'Bookings',   href: '/admin/bookings',   icon: CalendarCheck,  badge: true },
    { name: 'Calendar',   href: '/admin/calendar',   icon: Calendar },
    { name: 'Customers',  href: '/admin/customers',  icon: Users },
    { name: 'Drivers',    href: '/admin/drivers',    icon: UserCheck },
    { name: 'Fleet',      href: '/admin/fleet',      icon: Car },
    { name: 'Locations',  href: '/admin/locations',  icon: MapPin },
    { name: 'Pricing',    href: '/admin/pricing',    icon: DollarSign },
    { name: 'Expenses',   href: '/admin/expenses',   icon: Wallet },
    { name: 'Reports',    href: '/admin/reports',    icon: BarChart2 },
    { name: 'Settings',   href: '/admin/settings',   icon: Settings },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [pendingCount, setPendingCount] = useState(0);
    const [adminEmail, setAdminEmail] = useState<string | null>(null);

    // Live pending bookings count
    useEffect(() => {
        const fetchPending = async () => {
            const { count } = await supabase
                .from('bookings')
                .select('id', { count: 'exact', head: true })
                .eq('status', 'pending');
            setPendingCount(count ?? 0);
        };

        fetchPending();

        const channel = supabase
            .channel('sidebar-pending')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'bookings' }, () => {
                fetchPending();
            })
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    }, []);

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setAdminEmail(data.session?.user?.email ?? null);
        });
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
        router.refresh();
    };

    return (
        <>
            {/* Mobile toggle */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-brand-navy border-slate-700 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                    {pendingCount > 0 && !isMobileMenuOpen && (
                        <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                            {pendingCount > 9 ? '9+' : pendingCount}
                        </span>
                    )}
                </Button>
            </div>

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-40 w-64 bg-brand-navy border-r border-slate-800 transition-transform duration-300 ease-in-out md:translate-x-0",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="h-20 flex items-center px-6 border-b border-slate-800">
                        <Link href="/admin/dashboard" className="flex items-center gap-2">
                            <div className="bg-brand-gold/20 p-2 rounded-lg border border-brand-gold/30">
                                <Car className="h-6 w-6 text-brand-gold" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-wide">
                                Haram<span className="text-brand-gold">Admin</span>
                            </span>
                        </Link>
                    </div>

                    {/* Nav */}
                    <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = item.href === '/admin/dashboard'
                                ? pathname === '/admin/dashboard'
                                : pathname.startsWith(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                                        isActive
                                            ? "bg-brand-gold text-brand-navy font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Icon className={cn("w-5 h-5 shrink-0", isActive ? "text-brand-navy" : "text-slate-500 group-hover:text-brand-gold")} />
                                    <span className="flex-1">{item.name}</span>
                                    {item.badge && pendingCount > 0 && (
                                        <span className={cn(
                                            "text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center",
                                            isActive
                                                ? "bg-brand-navy text-brand-gold"
                                                : "bg-yellow-500 text-black"
                                        )}>
                                            {pendingCount > 99 ? '99+' : pendingCount}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Profile + Logout */}
                    <div className="p-4 border-t border-slate-800 space-y-3">
                        {adminEmail && (
                            <div className="flex items-center gap-3 px-3 py-2.5 bg-white/5 rounded-xl border border-slate-700/50">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 border border-yellow-500/30 flex items-center justify-center shrink-0">
                                    <span className="text-xs font-bold text-brand-gold">
                                        {adminEmail.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-white truncate">Admin</p>
                                    <p className="text-[10px] text-slate-500 truncate">{adminEmail}</p>
                                </div>
                            </div>
                        )}
                        <Button
                            onClick={handleLogout}
                            className="w-full justify-start bg-red-500/10 hover:bg-red-500/20 text-red-500 hover:text-red-400 border border-red-500/20 transition-all font-medium rounded-xl h-12"
                            variant="ghost"
                        >
                            <LogOut className="w-5 h-5 mr-2" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Mobile overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}
