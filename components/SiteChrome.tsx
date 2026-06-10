'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';
import UrgencyTopBar from './UrgencyTopBar';
import LeadCapturePopup from './LeadCapturePopup';
import MobileBottomCTA from './MobileBottomCTA';
import JsonLdBreadcrumb from './JsonLdBreadcrumb';
import JsonLdOrganization from './JsonLdOrganization';
import JsonLdLocalBusiness from './JsonLdLocalBusiness';
import JsonLdService from './JsonLdService';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    if (pathname.startsWith('/admin')) {
        return <>{children}</>;
    }

    return (
        <>
            <UrgencyTopBar />
            <Navbar />
            <JsonLdBreadcrumb />
            <JsonLdOrganization />
            <JsonLdLocalBusiness />
            <JsonLdService />
            <main id="main-content">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
            <LeadCapturePopup />
            <MobileBottomCTA />
        </>
    );
}
