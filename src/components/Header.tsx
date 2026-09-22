import Link from 'next/link';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-b from-white/90 via-white/50 to-transparent transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <Link href="/" aria-label="INTIOSS Home" className="flex items-center">
            <Logo />
          </Link>
          <nav className="hidden md:flex space-x-8 font-jost font-semibold text-intioss-charcoal text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-intioss-burgundy transition-colors">Home</Link>
            <Link href="/about" className="hover:text-intioss-burgundy transition-colors">About</Link>
            <Link href="/products" className="hover:text-intioss-burgundy transition-colors">Products</Link>
            <Link href="/services" className="hover:text-intioss-burgundy transition-colors">Services</Link>
            <Link href="/bookmatch" className="hover:text-intioss-burgundy transition-colors">Bookmatch</Link>
            <Link href="/stockyard" className="hover:text-intioss-burgundy transition-colors flex items-center gap-2">
              Live Stockyard
              <span className="bg-intioss-charcoal border border-intioss-white px-1.5 py-0.5 text-[9px] rounded-full animate-pulse text-intioss-white">Live Feed</span>
            </Link>
            <Link href="/contact" className="hover:text-intioss-burgundy transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
