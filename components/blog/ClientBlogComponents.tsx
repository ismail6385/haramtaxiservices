"use client";

import { useEffect, useState, useCallback } from 'react';
import { MessageCircle, FileText, Share2, Facebook, Twitter, Linkedin, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'sonner';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 24 24" 
        className={className} 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

/* ─────────────────────────────────────────────────────────
 * 1. READING PROGRESS BAR
 * Gold bar at top of screen showing scroll progress
 * ───────────────────────────────────────────────────────── */
export function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrolled = window.scrollY;
            const total = document.documentElement.scrollHeight - window.innerHeight;
            if (total > 0) {
                setProgress(Math.min((scrolled / total) * 100, 100));
            }
        };
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-1 z-[100] transition-[width] duration-100 ease-out"
            style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, hsl(var(--brand-gold)), hsl(var(--brand-gold-light)))',
            }}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
        />
    );
}

/* ─────────────────────────────────────────────────────────
 * 2. MOBILE STICKY CTA (Bottom Bar)
 * Two buttons: Book Ride + WhatsApp — always visible on mobile
 * ───────────────────────────────────────────────────────── */
export function MobileStickyCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggle = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', toggle, { passive: true });
        return () => window.removeEventListener('scroll', toggle);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom">
            <div className="flex gap-2.5 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <a
                    href="https://wa.me/966575806733"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-[#1ebd5b] active:scale-[0.97] transition-all"
                >
                    <WhatsAppIcon className="w-5 h-5" /> WhatsApp Now
                </a>
                <a
                    href="/booking"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-navy text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-brand-navy-light active:scale-[0.97] transition-all"
                >
                    <FileText className="w-4 h-4" /> Book VIP Ride
                </a>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
 * 3. SOCIAL SHARE BUTTONS
 * WhatsApp, Facebook, Twitter, LinkedIn, Copy Link
 * ───────────────────────────────────────────────────────── */
export function ShareArticle({ url, title }: { url: string; title: string }) {
    const [copied, setCopied] = useState(false);
    const shareUrl = `https://haramtaxiservice.com${url}`;

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            toast.success("Link copied!");
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback
        }
    }, [shareUrl]);

    const buttons = [
        { href: `https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`, icon: MessageCircle, bg: 'bg-[#25D366]', hoverBg: 'hover:bg-[#25D366]', label: 'WhatsApp' },
        { href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, icon: Facebook, bg: 'bg-blue-600', hoverBg: 'hover:bg-blue-600', label: 'Facebook' },
        { href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, icon: Twitter, bg: 'bg-sky-500', hoverBg: 'hover:bg-sky-500', label: 'Twitter' },
        { href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, icon: Linkedin, bg: 'bg-blue-700', hoverBg: 'hover:bg-blue-700', label: 'LinkedIn' },
    ];

    return (
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 my-12 border border-slate-200">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="font-bold text-gray-900 flex items-center gap-2 text-lg">
                    <Share2 className="w-5 h-5 text-brand-gold" /> Share this Guide
                </span>
                <div className="flex gap-3 flex-wrap justify-center">
                    {buttons.map(({ href, icon: Icon, bg, hoverBg, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-11 h-11 flex items-center justify-center rounded-full border border-transparent transition-all duration-200 shadow-md ${label === 'WhatsApp' ? 'bg-[#25D366] text-white hover:bg-[#1ebd5b]' : 'bg-white border-gray-200 text-gray-600 ' + hoverBg + ' hover:text-white hover:border-transparent'}`}
                            aria-label={`Share on ${label}`}
                        >
                            {label === 'WhatsApp' ? <WhatsAppIcon className="w-6 h-6" /> : <Icon className="w-5 h-5" />}
                        </a>
                    ))}
                    <button
                        onClick={handleCopy}
                        className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-800 hover:text-white hover:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                        aria-label="Copy link"
                    >
                        {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
 * 4. STICKY TABLE OF CONTENTS (Desktop Sidebar)
 * Highlights active section based on scroll position
 * ───────────────────────────────────────────────────────── */
export function TableOfContents({ headings }: { headings: { id: string; text: string; level: number }[] }) {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        if (!headings || headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find(e => e.isIntersecting);
                if (visible?.target.id) {
                    setActiveId(visible.target.id);
                }
            },
            { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 }
        );

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (!headings || headings.length === 0) return null;

    return (
        <nav className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm" aria-label="Table of contents">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">On This Page</h4>
            <ul className="space-y-1">
                {headings.map((heading, index) => {
                    const isActive = activeId === heading.id;
                    return (
                        <li key={index}>
                            <a
                                href={`#${heading.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={[
                                    'block py-1.5 text-[13px] leading-snug transition-all duration-200 rounded-lg',
                                    heading.level === 2 ? 'font-semibold pl-3' : 'pl-6 font-normal',
                                    isActive
                                        ? 'text-brand-navy bg-brand-gold/10 border-l-2 border-brand-gold'
                                        : 'text-gray-500 hover:text-gray-900 border-l-2 border-transparent hover:border-gray-300',
                                ].join(' ')}
                            >
                                {heading.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

/* ─────────────────────────────────────────────────────────
 * 5. FAQ ACCORDION (Expandable with Schema support)
 * ───────────────────────────────────────────────────────── */
interface FAQItem {
    question: string;
    answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!items || items.length === 0) return null;

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <div className="my-12">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-display">Frequently Asked Questions</h3>
            <div className="space-y-3">
                {items.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className={`border rounded-xl transition-all duration-200 ${isOpen ? 'border-brand-gold bg-brand-gold/5 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left gap-4"
                                aria-expanded={isOpen}
                            >
                                <span className={`font-semibold text-base md:text-lg ${isOpen ? 'text-brand-navy' : 'text-gray-800'}`}>
                                    {item.question}
                                </span>
                                {isOpen ? (
                                    <ChevronUp className="w-5 h-5 text-brand-gold flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            {isOpen && (
                                <div className="px-5 pb-5 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
