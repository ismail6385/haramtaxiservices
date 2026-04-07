import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogData } from '@/lib/blogData';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, User, Calendar, Tag, Clock, ChevronRight, ShieldCheck, Star, Phone, MessageCircle } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { ReadingProgress, MobileStickyCTA, ShareArticle, TableOfContents, FAQAccordion } from '@/components/blog/ClientBlogComponents';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogData.find((p) => p.slug === slug);
    if (!post) return { title: 'Blog Post Not Found' };

    return {
        title: `${post.title} | Haram Taxi Service`,
        description: post.excerpt,
        alternates: { canonical: `https://haramtaxiservice.com/blog/${slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [`https://haramtaxiservice.com${post.image}`],
            url: `https://haramtaxiservice.com/blog/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return blogData.slice(0, 30).map((post) => ({ slug: post.slug }));
}

/* ── Utilities ── */
function processContentAndHeadings(content: string) {
    const headings: { id: string; text: string; level: number }[] = [];
    const processedContent = content.replace(/<h([23])[^>]*>(.*?)<\/h\1>/gi, (_match, level, text) => {
        const rawText = text.replace(/<[^>]+>/g, '');
        const id = rawText.toLowerCase().replace(/[^\w-]+/g, '-').replace(/^-+|-+$/g, '');
        headings.push({ level: parseInt(level), text: rawText, id });
        return `<h${level} id="${id}">${text}</h${level}>`;
    });
    return { processedContent, headings };
}

function getReadingTime(text: string) {
    return Math.max(1, Math.ceil(text.replace(/<[^>]*>?/gm, '').split(/\s+/).length / 200));
}

/* ── Page ── */
export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    
    // Only allow the first 30 blogs for now (as requested by user)
    const allowedBlogs = blogData.slice(0, 30);
    const postIndex = allowedBlogs.findIndex((p) => p.slug === slug);
    const post = allowedBlogs[postIndex];

    if (!post) notFound();

    const { processedContent, headings } = processContentAndHeadings(post.content);
    const readingTime = getReadingTime(post.content);

    // Related posts (same category, excluding current)
    const relatedPosts = allowedBlogs
        .filter((p) => p.slug !== slug)
        .slice(0, 3);

    // Prev / Next
    const prevPost = postIndex > 0 ? allowedBlogs[postIndex - 1] : null;
    const nextPost = postIndex < allowedBlogs.length - 1 ? allowedBlogs[postIndex + 1] : null;

    // Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": [`https://haramtaxiservice.com${post.image}`],
        "datePublished": post.date,
        "dateModified": post.date,
        "author": { "@type": "Organization", "name": "Haram Taxi Service", "url": "https://haramtaxiservice.com" },
        "publisher": {
            "@type": "Organization",
            "name": "Haram Taxi Service",
            "logo": { "@type": "ImageObject", "url": "https://haramtaxiservice.com/icon.png" },
        },
        "description": post.excerpt,
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://haramtaxiservice.com/blog/${slug}` },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://haramtaxiservice.com/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://haramtaxiservice.com/blog/${slug}` },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <ReadingProgress />

            <div className="bg-white min-h-screen pb-28 lg:pb-16">

                {/* ── BREADCRUMBS ── */}
                <div className="bg-gray-50 border-b border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
                        <nav className="flex items-center text-sm text-gray-500 gap-1 overflow-x-auto" aria-label="Breadcrumb">
                            <Link href="/" className="hover:text-gray-900 whitespace-nowrap transition-colors">Home</Link>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                            <Link href="/blog" className="hover:text-gray-900 whitespace-nowrap transition-colors">Blog</Link>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                            <span className="text-gray-700 font-medium truncate max-w-[200px] sm:max-w-none">{post.title}</span>
                        </nav>
                    </div>
                </div>

                {/* ── MAIN LAYOUT ── */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 lg:pt-12">
                    <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-14">

                        {/* ════════════════════════════════════════════════
                         *  LEFT: ARTICLE
                         * ════════════════════════════════════════════════ */}
                        <article className="min-w-0">

                            {/* Category Badge */}
                            <div className="mb-5">
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-brand-gold/15 text-brand-navy px-3 py-1.5 rounded-full">
                                    <Tag className="w-3 h-3" /> {post.category}
                                </span>
                            </div>

                            {/* H1 */}
                            <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.5rem] font-extrabold text-gray-900 leading-[1.2] tracking-tight mb-6 font-display">
                                {post.title}
                            </h1>

                            {/* Meta Row */}
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 mb-8">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-7 h-7 rounded-full bg-brand-navy flex items-center justify-center">
                                        <User className="w-3.5 h-3.5 text-brand-gold" />
                                    </div>
                                    <span className="font-semibold text-gray-700">{post.author}</span>
                                </div>
                                <span className="text-gray-300">|</span>
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                                </div>
                                <span className="text-gray-300">|</span>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4 text-gray-400" /> {readingTime} min read
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative aspect-[16/9] w-full mb-10 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 720px"
                                />
                            </div>

                            {/* Mobile TOC */}
                            <div className="lg:hidden mb-10">
                                <TableOfContents headings={headings} />
                            </div>

                            {/* ── BLOG CONTENT ── */}
                            <div
                                className="blog-content"
                                dangerouslySetInnerHTML={{ __html: processedContent }}
                            />

                            {/* ── FAQ ACCORDION (with Schema) ── */}
                            {post.faqs && post.faqs.length > 0 && (
                                <FAQAccordion items={post.faqs} />
                            )}

                            {/* ── SHARE ── */}
                            <ShareArticle url={`/blog/${post.slug}`} title={post.title} />

                            {/* ── AUTHOR BIO ── */}
                            <div className="bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
                                <div className="flex gap-5 items-start">
                                    <div className="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0 shadow-md">
                                        <User className="w-7 h-7 text-brand-gold" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Written by</p>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{post.author}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                            15+ years of executive transport expertise across Makkah, Madinah, and Jeddah. Trusted by over 10,000 pilgrims for safe, dignified Umrah and Hajj journeys.
                                        </p>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                                                <ShieldCheck className="w-3 h-3" /> Licensed
                                            </span>
                                            <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                                                <Star className="w-3 h-3" /> Verified
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── RELATED SERVICE CTA ── */}
                            {post.relatedServiceSlug && (
                                <div className="bg-brand-navy rounded-2xl p-8 md:p-10 text-white shadow-xl mb-10 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                                    <div className="relative">
                                        <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">Related Service</p>
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight">
                                            Book Your VIP {post.relatedServiceSlug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                                        </h3>
                                        <p className="text-gray-300 md:text-lg mb-8 max-w-lg leading-relaxed">
                                            Experience executive comfort, safety, and punctuality. Fixed rates. No hidden charges. 24/7 availability.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href={`/services/${post.relatedServiceSlug}`}>
                                                <Button size="lg" className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-8 py-5 text-base shadow-lg">
                                                    View Service <ArrowRight className="w-5 h-5 ml-2" />
                                                </Button>
                                            </Link>
                                            <a href="https://wa.me/996575806733" target="_blank" rel="noopener noreferrer">
                                                <Button size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 font-bold px-6 py-5 text-base">
                                                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ── RELATED POSTS ── */}
                            {relatedPosts.length > 0 && (
                                <div className="mb-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 font-display">More Guides You May Like</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {relatedPosts.map((rp) => (
                                            <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                                                <div className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-brand-gold/30 rounded-xl p-4 transition-all duration-200 hover:shadow-md">
                                                    <div className="relative h-32 w-full rounded-lg overflow-hidden mb-3">
                                                        <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="300px" />
                                                    </div>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">{rp.category}</span>
                                                    <h4 className="text-sm font-bold text-gray-900 leading-snug mt-1 group-hover:text-brand-navy transition-colors line-clamp-2">
                                                        {rp.title}
                                                    </h4>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ── PREV / NEXT NAVIGATION ── */}
                            <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                                {prevPost ? (
                                    <Link href={`/blog/${prevPost.slug}`} className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-brand-gold/30 hover:shadow-sm transition-all">
                                        <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-brand-gold transition-colors flex-shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Previous</p>
                                            <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-brand-navy transition-colors">{prevPost.title}</p>
                                        </div>
                                    </Link>
                                ) : <div />}
                                {nextPost ? (
                                    <Link href={`/blog/${nextPost.slug}`} className="group flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-brand-gold/30 hover:shadow-sm transition-all text-right">
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Next</p>
                                            <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-brand-navy transition-colors">{nextPost.title}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-gold transition-colors flex-shrink-0" />
                                    </Link>
                                ) : <div />}
                            </div>

                        </article>

                        {/* ════════════════════════════════════════════════
                         *  RIGHT: SIDEBAR (Desktop Only)
                         * ════════════════════════════════════════════════ */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-24 space-y-6">

                                {/* Sticky TOC */}
                                <TableOfContents headings={headings} />

                                {/* Trust Signals */}
                                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Why Trust Us</p>
                                    <ul className="space-y-3.5">
                                        <li className="flex gap-3 text-gray-700 text-sm">
                                            <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900">Licensed & Insured</strong> fleet across KSA</span>
                                        </li>
                                        <li className="flex gap-3 text-gray-700 text-sm">
                                            <Star className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900">10,000+</strong> happy pilgrims served</span>
                                        </li>
                                        <li className="flex gap-3 text-gray-700 text-sm">
                                            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900">24/7</strong> live flight tracking</span>
                                        </li>
                                        <li className="flex gap-3 text-gray-700 text-sm">
                                            <Phone className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900">Fixed pricing</strong> — no haggling</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* WhatsApp Quick CTA */}
                                <a
                                    href="https://wa.me/996575806733"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-[#1ebd5b] active:scale-[0.97] transition-all w-full"
                                >
                                    <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                                </a>

                                {/* Compact Booking Form */}
                                <div id="booking-form" className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                                    <div className="bg-brand-navy px-5 py-3.5">
                                        <h3 className="text-white font-bold text-sm font-display">Quick Booking</h3>
                                        <p className="text-gray-300 text-xs mt-0.5">Secure your VIP ride now</p>
                                    </div>
                                    <div className="p-4">
                                        <Suspense fallback={<div className="h-[250px] flex items-center justify-center text-gray-400 text-sm">Loading...</div>}>
                                            <BookingForm />
                                        </Suspense>
                                    </div>
                                </div>

                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <MobileStickyCTA />
        </>
    );
}
