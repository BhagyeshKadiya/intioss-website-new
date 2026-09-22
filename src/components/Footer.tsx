import Link from 'next/link';
import { QualityMarbleEndorsement } from './QualityMarbleEndorsement';

interface FooterProps {
  showGandhiCivil?: boolean;
}

export function Footer({ showGandhiCivil = false }: FooterProps) {
  return (
    <footer className="w-full bg-intioss-burgundy-deep text-intioss-ivory py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-4 lg:col-span-2">
          <p className="font-jost text-sm text-intioss-stone max-w-sm mb-10 leading-relaxed">
            Operating since 1997, INTIOSS sources natural geological surfaces directly from global quarries. With dual stockyards in Mumbai and a dedicated processing facility in Silvassa, we supply calibrated stone for private residences and commercial architecture across India.
          </p>
          
          <div className="mt-6">
            {showGandhiCivil ? (
              <p className="font-jost text-xs uppercase tracking-widest text-intioss-gold">
                A Gandhi Civil Décor Group Enterprise
              </p>
            ) : (
              <QualityMarbleEndorsement />
            )}
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="font-marcellus text-lg text-intioss-white mb-6">Collections</h3>
          <ul className="space-y-4 font-jost text-sm text-intioss-stone">
            <li><Link href="/collections?category=marble" className="hover:text-intioss-gold transition-colors">Italian & Exotic Marble</Link></li>
            <li><Link href="/collections?category=quartzite" className="hover:text-intioss-gold transition-colors">Translucent Quartzite</Link></li>
            <li><Link href="/collections?category=onyx" className="hover:text-intioss-gold transition-colors">Persian Onyx</Link></li>
            <li><Link href="/collections" className="hover:text-intioss-gold transition-colors">Exclusive Collections</Link></li>
            <li><Link href="/bookmatch" className="hover:text-intioss-gold transition-colors">Bookmatch Artistry</Link></li>
            <li><Link href="/stockyard" className="hover:text-intioss-gold transition-colors">Live Stockyard</Link></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="font-marcellus text-lg text-intioss-white mb-6">Company</h3>
          <ul className="space-y-4 font-jost text-sm text-intioss-stone mb-10">
            <li><Link href="/about" className="hover:text-intioss-gold transition-colors">Our Story</Link></li>
            <li><Link href="/products" className="hover:text-intioss-gold transition-colors">Products</Link></li>
            <li><Link href="/services" className="hover:text-intioss-gold transition-colors">Services</Link></li>
            <li><Link href="/sustainability" className="hover:text-intioss-gold transition-colors">Sustainability</Link></li>
          </ul>

          <h3 className="font-marcellus text-lg text-intioss-white mb-6">Contact</h3>
          <ul className="space-y-3 font-jost text-sm text-intioss-stone">
            <li>Mumbai Stockyards: Vile Parle & Malad</li>
            <li>Processing Facility: Silvassa</li>
            <li><a href="mailto:contact@intioss.com" className="text-intioss-gold hover:underline">contact@intioss.com</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-intioss-stone/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-jost text-xs text-intioss-stone/70 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} INTIOSS Luxury Surfaces. All rights reserved.
        </p>
        <div className="flex gap-6 font-jost text-xs text-intioss-stone/70 tracking-widest uppercase">
          <Link href="/privacy" className="hover:text-intioss-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-intioss-white transition-colors">Terms of Service</Link>
          <span className="opacity-50">|</span>
          <span className="opacity-75">Sole Proprietorship</span>
        </div>
      </div>
    </footer>
  );
}
