'use client'

import { Search, RotateCcw, Download, Loader2, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface Props {
    search: string
    onSearchChange: (v: string) => void
    statusFilter: string
    onStatusChange: (v: string) => void
    dateFrom: string
    onDateFromChange: (v: string) => void
    dateTo: string
    onDateToChange: (v: string) => void
    filteredCount: number
    totalCount: number
    onReset: () => void
    onExportCSV: () => void
    exportingCSV: boolean
}

export default function FiltersBar({
    search, onSearchChange,
    statusFilter, onStatusChange,
    dateFrom, onDateFromChange,
    dateTo, onDateToChange,
    filteredCount, totalCount,
    onReset, onExportCSV, exportingCSV,
}: Props) {
    const isFiltered = search || statusFilter !== 'all' || dateFrom || dateTo

    return (
        <div className="space-y-2.5">
            <div className="flex flex-wrap gap-2.5">
                {/* Search */}
                <div className="relative flex-1 min-w-[220px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
                    <Input
                        placeholder="Search name, email, phone, ID…"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-9 pr-8 h-9 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-primary"
                    />
                    {search && (
                        <button
                            onClick={() => onSearchChange('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                            aria-label="Clear search"
                        >
                            <X className="h-3.5 w-3.5" />
                        </button>
                    )}
                </div>

                {/* Status */}
                <Select value={statusFilter} onValueChange={onStatusChange}>
                    <SelectTrigger className="w-[148px] h-9 bg-neutral-800 border-neutral-700 text-white text-sm">
                        <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                </Select>

                {/* Date From */}
                <input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => onDateFromChange(e.target.value)}
                    className="h-9 px-3 rounded-md bg-neutral-800 border border-neutral-700 text-white text-sm focus:outline-none focus:border-primary [color-scheme:dark] transition-colors"
                    aria-label="From date"
                />

                {/* Date To */}
                <input
                    type="date"
                    value={dateTo}
                    onChange={(e) => onDateToChange(e.target.value)}
                    className="h-9 px-3 rounded-md bg-neutral-800 border border-neutral-700 text-white text-sm focus:outline-none focus:border-primary [color-scheme:dark] transition-colors"
                    aria-label="To date"
                />

                {/* Reset */}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onReset}
                        className="h-9 px-3 text-neutral-400 hover:text-white hover:bg-neutral-700 border border-neutral-700"
                    >
                        <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
                        Reset
                    </Button>
                )}

                {/* Export CSV */}
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onExportCSV}
                    disabled={exportingCSV || filteredCount === 0}
                    className="h-9 px-3 ml-auto bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white disabled:opacity-50"
                >
                    {exportingCSV ? (
                        <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
                    ) : (
                        <Download className="h-3.5 w-3.5 mr-1.5" />
                    )}
                    Export CSV
                </Button>
            </div>

            {/* Results info */}
            {isFiltered && (
                <p className="text-xs text-neutral-500">
                    Showing <span className="text-neutral-300 font-medium">{filteredCount}</span> of{' '}
                    <span className="text-neutral-300 font-medium">{totalCount}</span> bookings
                </p>
            )}
        </div>
    )
}
