import { Skeleton } from '@/components/ui/skeleton'

export default function TableSkeleton() {
    return (
        <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
            <div className="grid grid-cols-7 gap-4 px-4 py-3 border-b border-neutral-700 bg-neutral-900/50">
                {Array.from({ length: 7 }).map((_, i) => (
                    <Skeleton key={i} className="h-3 bg-neutral-700 rounded" />
                ))}
            </div>
            {Array.from({ length: 8 }).map((_, i) => (
                <div
                    key={i}
                    className="grid grid-cols-7 gap-4 px-4 py-4 border-b border-neutral-700/50 last:border-0"
                >
                    <div className="space-y-1.5">
                        <Skeleton className="h-3 w-3/4 bg-neutral-700/60 rounded" />
                        <Skeleton className="h-2.5 w-full bg-neutral-700/40 rounded" />
                    </div>
                    {Array.from({ length: 6 }).map((_, j) => (
                        <Skeleton key={j} className="h-3 bg-neutral-700/40 rounded" />
                    ))}
                </div>
            ))}
        </div>
    )
}
