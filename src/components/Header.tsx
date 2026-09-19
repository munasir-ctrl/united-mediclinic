import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '@/data/navigation';
import { clinicConfig } from '@/data/clinicConfig';
import ButtonLink from './ButtonLink';
import { cn } from '@/utils/cn';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* Announcement / trust bar */}
      <div className="bg-ink-900 text-white text-xs py-2 hidden md:block">
        <div className="container-wide flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
            {clinicConfig.hours.note} · {clinicConfig.hours.weekdays[0].time}
          </span>
          <div className="flex items-center gap-5">
            {clinicConfig.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="flex items-center gap-1.5 hover:text-teal-300 transition-colors"
              >
                <Phone className="w-3 h-3" />
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass border-b border-ink-200/60 shadow-soft'
            : 'bg-white border-b border-transparent'
        )}
      >
        <div className="container-wide flex items-center justify-between h-16 lg:h-20 transition-all">
          <Logo className={scrolled ? 'scale-95' : ''} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors relative',
                  isActive(link.path)
                    ? 'text-brand-700'
                    : 'text-ink-600 hover:text-ink-900'
                )}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${clinicConfig.phones[0]}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-600" />
              </span>
              Call Now
            </a>
            <ButtonLink to="/book-appointment" size="sm" icon="arrow">
              Book an Appointment
            </ButtonLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={cn('w-5 h-0.5 bg-ink-900 transition-all', menuOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('w-5 h-0.5 bg-ink-900 transition-all', menuOpen && 'opacity-0')} />
            <span className={cn('w-5 h-0.5 bg-ink-900 transition-all', menuOpen && '-rotate-45 -translate-y-2')} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <nav
          className={cn(
            'absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-soft-xl p-6 pt-24 flex flex-col gap-1 transition-transform duration-300',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-3 text-base font-medium rounded-xl transition-colors',
                isActive(link.path)
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-ink-700 hover:bg-ink-50'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-ink-200 flex flex-col gap-3">
            <ButtonLink href={`tel:${clinicConfig.phones[0]}`} variant="ghost" size="md" icon="phone" className="w-full">
              Call {clinicConfig.phones[0]}
            </ButtonLink>
            <ButtonLink to="/book-appointment" variant="primary" size="md" icon="arrow" className="w-full">
              Book an Appointment
            </ButtonLink>
          </div>
        </nav>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 glass border-t border-ink-200/60 px-4 py-2.5 flex items-center justify-around">
        <a
          href={`tel:${clinicConfig.phones[0]}`}
          className="flex flex-col items-center gap-0.5 text-xs font-semibold text-ink-700"
        >
          <Phone className="w-5 h-5 text-brand-600" />
          Call
        </a>
        <Link
          to="/book-appointment"
          className="flex flex-col items-center gap-0.5 text-xs font-semibold text-white bg-brand-600 px-6 py-2 rounded-xl"
        >
          <Calendar className="w-5 h-5" />
          Book
        </Link>
        {clinicConfig.mapDirectionsUrl ? (
          <a
            href={clinicConfig.mapDirectionsUrl}
            className="flex flex-col items-center gap-0.5 text-xs font-semibold text-ink-700"
          >
            <span className="w-5 h-5 text-brand-600">↗</span>
            Directions
          </a>
        ) : (
          <Link
            to="/contact"
            className="flex flex-col items-center gap-0.5 text-xs font-semibold text-ink-700"
          >
            <span className="w-5 h-5 text-brand-600 flex items-center justify-center">⌖</span>
            Contact
          </Link>
        )}
      </div>
    </>
  );
}
