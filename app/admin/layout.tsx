import AdminSidebar from '@/components/AdminSidebar'
import { Toaster } from '@/components/ui/sonner'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-brand-navy-dark">
            <AdminSidebar />
            <main className="flex-1 md:ml-64 transition-all duration-300">
                <div className="p-4 md:p-8 pt-20 md:pt-8 min-h-screen bg-brand-navy/30 backdrop-blur-sm">
                    {children}
                </div>
            </main>
            <Toaster
                position="bottom-right"
                theme="dark"
                toastOptions={{
                    classNames: {
                        toast: 'bg-brand-navy border border-slate-800 text-white shadow-[0_4px_15px_rgba(0,0,0,0.5)]',
                        description: 'text-slate-400',
                        success: 'border-brand-gold/50 text-brand-gold',
                        error: 'border-red-500/50 text-red-500',
                    },
                }}
            />
        </div>
    )
} 
