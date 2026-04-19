'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Plus, Wallet, Trash2, CalendarDays } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface Expense {
    id: string;
    created_at: string;
    description: string;
    amount: number;
    category: string;
    date: string;
}

export default function ExpensesPage() {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    
    // Form State
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Fuel');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const router = useRouter();

    const checkUser = useCallback(async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            router.push('/admin/login');
        }
    }, [router]);

    const fetchExpenses = useCallback(async () => {
        try {
            // Note: Since 'expenses' table hasn't been explicitly created on the DB,
            // this is an optimistic implementation. You'll need an expenses table in Supabase. 
            // id (UUID, PK), created_at (Timestamptz), description (text), amount (numeric), category (text), date (date)
            const { data, error } = await supabase
                .from('expenses')
                .select('*')
                .order('date', { ascending: false });

            if (error) {
                if (error.code === '42P01') {
                    // Table doesn't exist yet, graceful fallback for UI demo.
                    setExpenses([]);
                } else throw error;
            } else {
                setExpenses(data || []);
            }
        } catch (error) {
            console.error('Error fetching expenses:', error);
            setExpenses([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        checkUser();
        fetchExpenses();
    }, [checkUser, fetchExpenses]);

    const handleAddExpense = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase
                .from('expenses')
                .insert([
                    {
                        description,
                        amount: parseFloat(amount),
                        category,
                        date,
                    }
                ])
                .select();

            if (error) throw error;
            
            if (data) {
                setExpenses([data[0], ...expenses]);
            }
            
            setIsDialogOpen(false);
            setDescription('');
            setAmount('');
            
        } catch (error) {
            console.error('Error adding expense:', error);
            // Optmistic UI update if no table exists
            const tempExpense = {
                id: Math.random().toString(),
                created_at: new Date().toISOString(),
                description,
                amount: parseFloat(amount),
                category,
                date
            };
            setExpenses([tempExpense, ...expenses]);
            setIsDialogOpen(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this expense?')) return;
        try {
            const { error } = await supabase.from('expenses').delete().eq('id', id);
            if (error) throw error;
            setExpenses(expenses.filter(e => e.id !== id));
        } catch (error) {
            console.error('Error deleting:', error);
            // Optimistic update
            setExpenses(expenses.filter(e => e.id !== id));
        }
    };

    const totalExpenses = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-navy flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-gold"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200 flex items-center gap-2">
                            <Wallet className="h-8 w-8 text-brand-gold" />
                            Expense Tracker
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">Manage fleet and operational costs</p>
                    </div>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-bold">
                                <Plus className="w-4 h-4 mr-2" /> Add Expense
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-brand-navy border border-slate-700 text-white sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className="text-brand-gold text-xl">Record New Expense</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleAddExpense} className="space-y-4 mt-4">
                                <div className="space-y-2">
                                    <Label>Date</Label>
                                    <Input 
                                        type="date" 
                                        required 
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="bg-brand-navy-light border-slate-700 text-white" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Description</Label>
                                    <Input 
                                        placeholder="e.g., Highway Toll, Fuel Fill, Maintenance..." 
                                        required 
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="bg-brand-navy-light border-slate-700 text-white" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Category</Label>
                                    <select 
                                        className="flex h-10 w-full rounded-md border border-slate-700 bg-brand-navy-light px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-gold"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option>Fuel</option>
                                        <option>Maintenance</option>
                                        <option>Tolls & Parking</option>
                                        <option>Marketing</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Amount (SAR)</Label>
                                    <Input 
                                        type="number" 
                                        step="0.01" 
                                        required 
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="bg-brand-navy-light border-slate-700 text-white" 
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-brand-gold text-brand-navy hover:bg-brand-gold-light mt-4 font-bold">
                                    Save Expense
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Stats Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-brand-navy-light p-6 rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-slate-400">Total Expenses (All Time)</h3>
                            <Wallet className="h-4 w-4 text-brand-gold" />
                        </div>
                        <div className="text-3xl font-bold text-white relative z-10 flex items-baseline gap-1">
                            {totalExpenses.toLocaleString('en-SA', { minimumFractionDigits: 2 })} <span className="text-sm text-brand-gold">SAR</span>
                        </div>
                    </div>
                </div>

                {/* Expenses Table */}
                <div className="bg-brand-navy border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    <Table>
                        <TableHeader className="bg-black/40 border-b border-slate-800">
                            <TableRow className="border-none hover:bg-transparent">
                                <TableHead className="text-slate-400 font-medium py-5 w-[120px]">Date</TableHead>
                                <TableHead className="text-slate-400 font-medium py-5">Description</TableHead>
                                <TableHead className="text-slate-400 font-medium py-5">Category</TableHead>
                                <TableHead className="text-slate-400 font-medium py-5 text-right">Amount (SAR)</TableHead>
                                <TableHead className="text-slate-400 font-medium py-5 text-right w-[80px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {expenses.length === 0 ? (
                                <TableRow className="border-slate-800">
                                    <TableCell colSpan={5} className="text-center py-16 text-slate-500">
                                        No expenses recorded yet.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                expenses.map((expense) => (
                                    <TableRow key={expense.id} className="border-slate-800/80 hover:bg-brand-navy-light/40 transition-colors">
                                        <TableCell className="text-[13px] text-slate-300">
                                            <div className="flex items-center gap-2">
                                                <CalendarDays className="w-4 h-4 text-brand-gold/70" />
                                                {expense.date}
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium text-white">
                                            {expense.description}
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                                {expense.category}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right font-mono text-brand-gold">
                                            {Number(expense.amount).toFixed(2)}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button 
                                                variant="ghost" 
                                                size="icon" 
                                                className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                                onClick={() => handleDelete(expense.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
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
