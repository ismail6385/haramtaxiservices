'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import {
    CalendarDays,
    Car,
    LogOut,
    Menu,
    X,
    Settings,
    Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: CalendarDays },
    { name: 'Bookings', href: '/admin/bookings', icon: Car },
    { name: 'Expenses', href: '/admin/expenses', icon: Wallet },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
        router.refresh();
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-brand-navy border-slate-700 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </Button>
            </div>

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-40 w-64 bg-brand-navy border-r border-slate-800 transition-transform duration-300 ease-in-out md:translate-x-0",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex flex-col h-full">
                    {/* Logo Section - Website Color Matches */}
                    <div className="h-20 flex items-center px-6 border-b border-slate-800">
                        <Link href="/admin/dashboard" className="flex items-center gap-2">
                            <div className="bg-brand-gold/20 p-2 rounded-lg border border-brand-gold/30">
                                <Car className="h-6 w-6 text-brand-gold" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-wide">Haram<span className="text-brand-gold">Admin</span></span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            // Exact match for dashboard to prevent highlighting it when on /admin/bookings
                            const isActive = item.href === '/admin/dashboard' 
                                ? pathname === '/admin/dashboard'
                                : pathname.startsWith(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                        isActive
                                            ? "bg-brand-gold text-brand-navy font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Icon className={cn("w-5 h-5", isActive ? "text-brand-navy" : "text-slate-500 group-hover:text-brand-gold")} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Logout Section */}
                    <div className="p-4 border-t border-slate-800">
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

            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}

