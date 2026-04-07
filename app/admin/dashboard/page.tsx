'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import {
    Calendar,
    Clock,
    MapPin,
    CheckCircle2,
    Search,
    Filter,
    MessageCircle,
    UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface Booking {
    id: string;
    created_at: string;
    pickup_location: string;
    dropoff_location: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    passenger_count: number;
    contact_name: string;
    contact_phone: string;
    contact_email: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    total_price?: number;
    driver_assigned?: string;
}

export default function AdminDashboard() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const router = useRouter();


    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const { data, error } = await supabase
                    .from('bookings')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setBookings(data || []);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            } finally {
                setLoading(false);
            }
        };

        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/admin/login');
            } else {
                fetchBookings();
            }
        };
        checkSession();
    }, [router]);

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const { error } = await supabase
                .from('bookings')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            // Update local state
            setBookings(bookings.map(b =>
                b.id === id ? { ...b, status: newStatus as Booking['status'] } : b
            ));
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const updateDriver = async (booking: Booking) => {
        const driverName = window.prompt("Enter Driver Name/ID to assign:");
        if (!driverName) return;

        try {
            const { error } = await supabase
                .from('bookings')
                .update({ driver_assigned: driverName, status: 'confirmed' })
                .eq('id', booking.id);

            if (error) throw error;
            
            setBookings(bookings.map(b =>
                b.id === booking.id ? { ...b, driver_assigned: driverName, status: 'confirmed' } : b
            ));
        } catch (error) {
            console.error('Error assigning driver:', error);
        }
    };

    const sendWhatsApp = (booking: Booking) => {
        const driverInfo = booking.driver_assigned ? `\nDriver Assigned: ${booking.driver_assigned}` : '';
        const message = `Hello ${booking.contact_name},\n\nYour Haram Taxi Service booking is *${booking.status.toUpperCase()}*.\n\nPickup: ${booking.pickup_location}\nDrop-off: ${booking.dropoff_location}\nDate: ${booking.pickup_date} at ${booking.pickup_time}${driverInfo}\n\nThank you for choosing us!`;
        const phone = booking.contact_phone.startsWith('+') ? booking.contact_phone : `+${booking.contact_phone}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone.replace(/[^0-9+]/g, '')}?text=${encodedMessage}`, '_blank');
    };

    // Filter Logic
    const filteredBookings = bookings.filter(booking => {
        const matchesSearch =
            booking.contact_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.contact_email?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed': return 'bg-green-500/10 text-green-500 border-green-500/20';
            case 'pending': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
            case 'cancelled': return 'bg-red-500/10 text-red-500 border-red-500/20';
            case 'completed': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            default: return 'bg-gray-500/10 text-gray-500';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-navy flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-gold"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-navy text-white">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200">
                            Dashboard Overview
                        </h1>
                        <div className="text-sm text-slate-400 mt-1">
                            Welcome back, Super Admin Workspace
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-brand-navy-light p-6 rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-slate-400">Total Bookings</h3>
                            <Calendar className="h-4 w-4 text-brand-gold" />
                        </div>
                        <div className="text-3xl font-bold text-white relative z-10">{bookings.length}</div>
                    </div>
                    <div className="bg-brand-navy-light p-6 rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-slate-400">Pending</h3>
                            <Clock className="h-4 w-4 text-yellow-500" />
                        </div>
                        <div className="text-3xl font-bold text-yellow-500 relative z-10">
                            {bookings.filter(b => b.status === 'pending').length}
                        </div>
                    </div>
                    <div className="bg-brand-navy-light p-6 rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-slate-400">Confirmed</h3>
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="text-3xl font-bold text-green-500 relative z-10">
                            {bookings.filter(b => b.status === 'confirmed').length}
                        </div>
                    </div>
                    <div className="bg-brand-navy-light p-6 rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-slate-400">Top Destination</h3>
                            <MapPin className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="text-3xl font-bold text-blue-400 truncate relative z-10">
                            Makkah
                        </div>
                    </div>
                </div>

                {/* Dashboard Actions */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                        <Input
                            placeholder="Search by name, email, or ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-brand-navy-light border-slate-700 text-white placeholder:text-slate-500 focus:border-brand-gold h-12 rounded-xl"
                        />
                    </div>
                    <div className="w-full md:w-[200px]">
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="bg-brand-navy-light border-slate-700 text-white h-12 rounded-xl">
                                <div className="flex items-center gap-2">
                                    <Filter className="w-4 h-4 text-brand-gold" />
                                    <SelectValue placeholder="All Status" />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="bg-brand-navy-light border-slate-700 text-white rounded-xl">
                                <SelectItem value="all" className="focus:bg-brand-navy focus:text-brand-gold">All Status</SelectItem>
                                <SelectItem value="pending" className="focus:bg-brand-navy focus:text-brand-gold">Pending</SelectItem>
                                <SelectItem value="confirmed" className="focus:bg-brand-navy focus:text-brand-gold">Confirmed</SelectItem>
                                <SelectItem value="completed" className="focus:bg-brand-navy focus:text-brand-gold">Completed</SelectItem>
                                <SelectItem value="cancelled" className="focus:bg-brand-navy focus:text-brand-gold">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Bookings Table */}
                <div className="bg-brand-navy border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    <Table>
                        <TableHeader className="bg-black/40 border-b border-slate-800">
                            <TableRow className="border-none hover:bg-transparent">
                                <TableHead className="text-slate-400 font-medium py-5">Booking ID</TableHead>
                                <TableHead className="text-slate-400 font-medium py-5">Customer</TableHead>
                                <TableHead className="text-slate-400 font-medium py-5">Trip Details</TableHead>
                                <TableHead className="text-slate-400 font-medium py-5">Vehicle & Driver</TableHead>
                                <TableHead className="text-slate-400 font-medium py-5">Date & Time</TableHead>
                                <TableHead className="text-slate-400 font-medium py-5">Status</TableHead>
                                <TableHead className="text-slate-400 font-medium py-5 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredBookings.length === 0 ? (
                                <TableRow className="border-slate-800">
                                    <TableCell colSpan={7} className="text-center py-16 text-slate-500">
                                        No bookings found matching your filters.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredBookings.map((booking) => (
                                    <TableRow key={booking.id} className="border-slate-800/80 hover:bg-brand-navy-light/40 transition-colors">
                                        <TableCell className="font-mono text-[11px] text-slate-400">
                                            {booking.id.slice(0, 8).toUpperCase()}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-white">{booking.contact_name}</span>
                                                <span className="text-[11px] text-slate-400">{booking.contact_phone}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col gap-1.5 text-[13px]">
                                                <div className="flex items-center gap-2 text-slate-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_5px_rgba(212,175,55,0.8)]"></span>
                                                    {booking.pickup_location}
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                                    {booking.dropoff_location}
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col gap-2 items-start">
                                                <Badge variant="outline" className="bg-black/30 border-slate-700 text-brand-gold font-medium">
                                                    {booking.vehicle_type}
                                                </Badge>
                                                {booking.driver_assigned ? (
                                                    <div className="text-[11px] flex items-center gap-1 text-green-400 bg-green-500/10 px-2 py-0.5 rounded-sm border border-green-500/20">
                                                        <UserPlus className="w-3 h-3" /> {booking.driver_assigned}
                                                    </div>
                                                ) : (
                                                    <button onClick={() => updateDriver(booking)} className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                                                        <UserPlus className="w-3 h-3" /> Assign Driver
                                                    </button>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-[13px] text-slate-300">
                                            <div className="font-medium text-white">{booking.pickup_date}</div>
                                            <div className="text-[11px] text-slate-400">{booking.pickup_time}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={`${getStatusColor(booking.status)} uppercase text-[10px] tracking-wider font-bold`}>
                                                {booking.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button 
                                                    size="icon" 
                                                    variant="ghost" 
                                                    className="h-8 w-8 text-green-500 hover:text-green-400 hover:bg-green-500/10"
                                                    onClick={() => sendWhatsApp(booking)}
                                                    title="Send WhatsApp Update"
                                                >
                                                    <MessageCircle className="h-4 w-4" />
                                                </Button>
                                                <Select
                                                    defaultValue={booking.status}
                                                    onValueChange={(val) => updateStatus(booking.id, val)}
                                                >
                                                    <SelectTrigger className="h-8 w-[120px] bg-black/40 border-slate-700 text-[11px] focus:ring-1 focus:ring-brand-gold">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-brand-navy border-slate-700 rounded-lg shadow-xl">
                                                        <SelectItem value="pending" className="text-xs focus:bg-brand-gold focus:text-black">Pending</SelectItem>
                                                        <SelectItem value="confirmed" className="text-xs focus:bg-brand-gold focus:text-black">Confirmed</SelectItem>
                                                        <SelectItem value="completed" className="text-xs focus:bg-brand-gold focus:text-black">Completed</SelectItem>
                                                        <SelectItem value="cancelled" className="text-xs focus:bg-brand-gold focus:text-black">Cancelled</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
